module.exports = (() => {
  const { getAllUsersPrefAction } = require('../../actions/preferences_actions');
  const { postTimetable } = require('../../actions/timetable_actions');
  const {
    getMonthNorm, checkIfWeekendDay, getRandomInt,
    getDayNames, TTDATA, TTRULES, sortUsersByNight,
  } = require('./utils');


  const checkLastNight = (resultMatrix, line, day) => {
    for (let index = day; index >= day - 3; index -= 1) {
      if (resultMatrix[line][index]
        && (resultMatrix[line][index] === TTDATA.N.label
          || resultMatrix[line][index] === TTDATA.GN.label)
      ) {
        return false;
      }
    }
    return true;
  };

  const generateTTAlgorithm = (month, year, usersPreferences) => new Promise((resolve) => {
    const numberOfDays = new Date(year, month, 0).getDate();
    const numberOfUsers = usersPreferences.length;
    const monthNorm = getMonthNorm(month, year, numberOfDays);
    const resultMatrix = [];
    const userStatus = {};

    // initialize result matrix
    for (let userIndex = 0; userIndex < numberOfUsers; userIndex += 1) {
      resultMatrix[userIndex] = new Array(numberOfDays + 1).fill(null);
      resultMatrix[userIndex][0] = usersPreferences[userIndex].user_id;
      userStatus[usersPreferences[userIndex].user_id] = {
        freeDays: 0,
        norm: 0,
        nights: 0,
      };
    }

    // set free weekend START
    const weekendDays = [];
    for (let day = 1; day <= numberOfDays; day += 1) {
      if (checkIfWeekendDay(day, month, year)) {
        weekendDays.push(day);
      }
    }
    for (let userIndex = 0; userIndex < numberOfUsers; userIndex += 1) {
      const userId = usersPreferences[userIndex].user_id;
      for (let dayIndex = 0; dayIndex < weekendDays.length; dayIndex += 1) {
        const day = weekendDays[dayIndex];
        resultMatrix[userIndex][day] = TTDATA.L.label;
        userStatus[userId].freeDays += 1;
      }
    }
    // set free weekend END

    for (let day = 1; day <= numberOfDays; day += 1) {
      const usedUsers = [];
      const dayInfo = {
        nights: 0,
        freeDays: 0,
        shifts: 0,
      };
      if (checkIfWeekendDay(day, month, year)) {
        // set night
        for (let index = 0; index < 1; index += 1) {
          let randomUser = getRandomInt(0, numberOfUsers - 1);
          while (true) {
            if (usedUsers.indexOf(randomUser) === -1
              && checkLastNight(resultMatrix, randomUser, day)) {
              break;
            }
            randomUser = getRandomInt(0, numberOfUsers - 1);
          }

          usedUsers.push(randomUser);
          // avem un user selectat
          if (resultMatrix[randomUser][day]) {
            const userId = resultMatrix[randomUser][0];
            resultMatrix[randomUser][day] = TTDATA.GN.label;
            userStatus[userId].norm += TTDATA.GN.value;
            userStatus[userId].nights += 1;
            dayInfo.nights += 1;
          }
        }
      } else {
        // set night
        for (let index = 0; index < 1; index += 1) {
          let randomUser = getRandomInt(0, numberOfUsers - 1);
          while (true) {
            if (usedUsers.indexOf(randomUser) === -1
              && checkLastNight(resultMatrix, randomUser, day)) {
              break;
            }
            randomUser = getRandomInt(0, numberOfUsers - 1);
          }

          usedUsers.push(randomUser);
          // avem un user selectat
          if (resultMatrix[randomUser][day] === null) {
            const userId = resultMatrix[randomUser][0];
            resultMatrix[randomUser][day] = TTDATA.N.label;
            userStatus[userId].norm += TTDATA.N.value;
            userStatus[userId].nights += 1;
            dayInfo.nights += 1;
          }
        }

        // set 12 hour shift
        for (let index = 0; index < 2; index += 1) {
          let randomUser = getRandomInt(0, numberOfUsers - 1);
          while (usedUsers.indexOf(randomUser) !== -1) {
            randomUser = getRandomInt(0, numberOfUsers - 1);
          }
          usedUsers.push(randomUser);
          // avem un user selectat
          if (resultMatrix[randomUser][day] === null) {
            const userId = resultMatrix[randomUser][0];
            resultMatrix[randomUser][day] = TTDATA.T.label;
            userStatus[userId].norm += TTDATA.T.value;
            dayInfo.shifts += 1;
          }
        }

        // set free shifts
        for (let index = 0; index < 3; index += 1) {
          let randomUser = getRandomInt(0, numberOfUsers - 1);
          while (usedUsers.indexOf(randomUser) !== -1) {
            randomUser = getRandomInt(0, numberOfUsers - 1);
          }
          usedUsers.push(randomUser);
          // avem un user selectat
          if (resultMatrix[randomUser][day] === null) {
            const userId = resultMatrix[randomUser][0];
            resultMatrix[randomUser][day] = TTDATA.L.label;
            dayInfo.freeDays += 1;
          }
        }
      }
    }


    console.log(userStatus);

    const tableData = [];
    for (let userIndex = 0; userIndex < numberOfUsers; userIndex += 1) {
      const userId = usersPreferences[userIndex].user_id;
      tableData.push({
        userId,
        data: resultMatrix[userIndex].slice(1),
        norm: userStatus[userId].norm
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
          });
      })
      .catch((e) => console.log(e)); //eslint-disable-line
  };

  return {
    timetableAlgorithm
  };
})();
