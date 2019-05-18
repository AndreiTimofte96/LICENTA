module.exports = (() => {
  const { getAllUsersPrefAction } = require('../../actions/preferences_actions');
  const { postTimetable } = require('../../actions/timetable_actions');
  const {
    getMonthNorm, checkIfWeekendDay, getRandomInt,
    getDayNames, TTDATA, TTRULES
  } = require('./utils');

  const generateTTAlgorithm = (month, year, usersPreferences) => new Promise((resolve) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const numberOfUsers = usersPreferences.length;
    const monthNorm = getMonthNorm(month, year, daysInMonth);
    const resultMatrix = [];
    const userStatus = {};

    // initialize result matrix
    for (let userIndex = 0; userIndex < numberOfUsers; userIndex += 1) {
      resultMatrix[userIndex] = new Array(daysInMonth + 1).fill(null);
      resultMatrix[userIndex][0] = usersPreferences[userIndex].user_id;
      userStatus[usersPreferences[userIndex].user_id] = { freeDays: 0, norm: 0 };
    }

    // handle pref free days + free days
    for (let userIndex = 0; userIndex < numberOfUsers; userIndex += 1) {
      let sELength;
      if (usersPreferences[userIndex].special_events !== null) {
        sELength = usersPreferences[userIndex].special_events.length;
      } else {
        sELength = 0;
      }
      if (sELength) {
        userStatus[usersPreferences[userIndex].user_id].freeDays += sELength;

        // set pref free days
        for (let sEIndex = 0; sEIndex < sELength; sEIndex += 1) {
          const sE = usersPreferences[userIndex].special_events[sEIndex];
          const sEDay = new Date(sE).getDate();
          resultMatrix[userIndex][sEDay] = TTDATA.L.label;
        }
      }

      // set random free days
      for (let fDIndex = 0; fDIndex < TTRULES.freeDays - sELength; fDIndex += 1) {
        let fDAvailable = false;
        let fD;
        while (!fDAvailable) {
          fD = getRandomInt(1, daysInMonth);
          if (resultMatrix[userIndex][fD] === null) {
            fDAvailable = true;
          }
        }
        userStatus[usersPreferences[userIndex].user_id].freeDays += 1;
        resultMatrix[userIndex][fD] = TTDATA.L.label;
      }
    }

    // handle 12 hours + nights + Gzi + GN shifts without rules
    for (let userIndex = 0; userIndex < numberOfUsers; userIndex += 1) {
      for (let dayIndex = 1; dayIndex <= daysInMonth; dayIndex += 1) {
        if (resultMatrix[userIndex][dayIndex] === null) {
          if (checkIfWeekendDay(year, month, dayIndex)) {
            const options = [TTDATA.GZI, TTDATA.GN];
            const random = getRandomInt(0, 1);
            resultMatrix[userIndex][dayIndex] = options[random].label;
          } else {
            const options = [TTDATA.N, TTDATA.T, TTDATA.E];
            const random = getRandomInt(0, 1);
            resultMatrix[userIndex][dayIndex] = options[random].label;
            userStatus[usersPreferences[userIndex].user_id].norm += options[random].value;
          }
        }
      }
    }

    const tableData = [];
    for (let userIndex = 0; userIndex < numberOfUsers; userIndex += 1) {
      const userId = usersPreferences[userIndex].user_id;
      resultMatrix[userIndex][0] = null;
      tableData.push({
        userId,
        data: resultMatrix[userIndex]
      });
    }
    // prepare response for resolve
    const response = {
      month,
      year,
      monthNorm,
      tableHeader: getDayNames(month, year),
      tableData
    };

    resolve(response);
  });

  const timetableAlgorithm = (month, year) => {
    getAllUsersPrefAction({ month, year })
      .then((usersPreferences) => {
        generateTTAlgorithm(month, year, usersPreferences)
          .then((generatedTT) => {
            postTimetable(generatedTT);
            // console.log(generatedTT);
          });
      })
      .catch((e) => console.log(e)); //eslint-disable-line
  };

  return {
    timetableAlgorithm
  };
})();
