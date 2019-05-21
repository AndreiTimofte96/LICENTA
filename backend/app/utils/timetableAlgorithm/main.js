module.exports = (() => {
  const { getAllUsersPrefAction } = require('../../actions/preferences_actions');
  const { postTimetable } = require('../../actions/timetable_actions');
  const {
    getMonthNorm, checkIfWeekendDay, getRandomInt, respectsAllConstraints,
    getDayNames, TTDATA, TTRULES, permuteArray, shuffleArray, checkInsertShift,
  } = require('./utils');

  const generateTTAlgorithm = (month, year, usersPreferences) => new Promise((resolve) => {
    const numberOfDays = new Date(year, month, 0).getDate();
    const numberOfUsers = usersPreferences.length;
    const monthNorm = getMonthNorm(month, year, numberOfDays);
    let resultMatrix;
    let userStatus;

    while (1) { //eslint-disable-line
      resultMatrix = [];
      userStatus = {};
      // initialize result matrix
      for (let userIndex = 0; userIndex < numberOfUsers; userIndex += 1) {
        resultMatrix[userIndex] = new Array(numberOfDays + 1).fill(null);
        resultMatrix[userIndex][0] = usersPreferences[userIndex].user_id;
        userStatus[usersPreferences[userIndex].user_id] = {
          freeDays: 0,
          norm: 0,
          nights: 0,
          weekNights: 0,
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
        for (let dayIndex = 0; dayIndex < weekendDays.length; dayIndex += 1) {
          const day = weekendDays[dayIndex];
          resultMatrix[userIndex][day] = TTDATA.L.label;
        }
      }
      // set free weekend END

      const initalArr = [TTDATA.L.label, TTDATA.L.label, TTDATA.L.label,
        TTDATA.N.label, TTDATA.T.label, TTDATA.T.label];
      const shuffledArr = shuffleArray(initalArr);
      const permutedMatrix = permuteArray(shuffledArr);
      const permutedWeekMatrix = [
        ['L', 'L', 'L', 'L', 'L', 'Gn'],
        ['L', 'L', 'L', 'L', 'Gn', 'L'],
        ['L', 'L', 'L', 'Gn', 'L', 'L'],
        ['L', 'L', 'Gn', 'L', 'L', 'L'],
        ['L', 'Gn', 'L', 'L', 'L', 'L'],
        ['Gn', 'L', 'L', 'L', 'L', 'L'],
      ];
      for (let day = 1; day <= numberOfDays; day += 1) {
        if (checkIfWeekendDay(day, month, year)) {
          const N = permutedWeekMatrix.length;
          const x = Array.apply(null, { length: N }).map(Number.call, Number); //eslint-disable-line
          const xx = shuffleArray(x);
          for (let index = 0; index < permutedWeekMatrix.length; index += 1) {
            const arr = permutedWeekMatrix[xx[index]];
            if (respectsAllConstraints(resultMatrix, arr, day, month, year, userStatus) === true) {
              for (let userIndex = 0; userIndex < arr.length; userIndex += 1) {
                resultMatrix[userIndex][day] = arr[userIndex];
                const userId = resultMatrix[userIndex][0];
                switch (arr[userIndex]) {
                  case 'Gn':
                    userStatus[userId].norm += TTDATA.GN.value;
                    userStatus[userId].freeDays -= 1;
                    userStatus[userId].weekNights += 1;
                    break;
                  case 'L':
                    userStatus[userId].freeDays += 1;
                    break;
                  default:
                    break;
                }
              }
              break;
            }
          }
        } else {
          const N = permutedMatrix.length;
          const x = Array.apply(null, { length: N }).map(Number.call, Number); //eslint-disable-line
          const xx = shuffleArray(x);
          for (let index = 0; index < permutedMatrix.length; index += 1) {
            // if respects all rules
            const arr = permutedMatrix[xx[index]];
            if (respectsAllConstraints(resultMatrix, arr, day, month, year, userStatus) === true) {
              for (let userIndex = 0; userIndex < arr.length; userIndex += 1) {
                resultMatrix[userIndex][day] = arr[userIndex];
                const userId = resultMatrix[userIndex][0];
                switch (arr[userIndex]) {
                  case '12':
                    userStatus[userId].norm += TTDATA.T.value;
                    break;
                  case 'N':
                    userStatus[userId].norm += TTDATA.N.value;
                    userStatus[userId].nights += 1;
                    break;
                  case 'L':
                    userStatus[userId].freeDays += 1;
                    break;
                  default:
                    break;
                }
              }
              break;
            }
          }
        }
      }

      let status = true;
      for (let i = 0; i < resultMatrix.length; i += 1) {
        for (let j = 0; j < resultMatrix[i].length; j += 1) {
          if (resultMatrix[i][j] == null) {
            status = false;
            break;
          }
        }
      }
      if (status) break;
    }

    // normalizare
    for (let userIndex = 0; userIndex < numberOfUsers; userIndex += 1) {
      const userId = resultMatrix[userIndex][0];
      if (userStatus[userId].norm < monthNorm) {
        while (userStatus[userId].norm < (monthNorm + (TTDATA.T.value - TTDATA.E.value))) {
          const day = getRandomInt(1, numberOfDays);
          if (checkIfWeekendDay(day, month, year) === false) {
            if (resultMatrix[userIndex][day] === TTDATA.L.label
              && checkInsertShift(resultMatrix, userIndex, day)) {
              resultMatrix[userIndex][day] = TTDATA.T.label;
              userStatus[userId].norm += TTDATA.T.value;
              userStatus[userId].freeDays -= 1;
            }
          }
        }

        for (let day = 2; day <= numberOfDays; day += 1) {
          // daca am 12 12
          if (resultMatrix[userIndex][day] === TTDATA.T.label
            && resultMatrix[userIndex][day - 1] === TTDATA.T.label) {
            // daca nu am numar minim de nopti, adaug nopti
            if (userStatus[userId].nights <= TTRULES.maxNights
              && resultMatrix[userIndex][day - 1] !== TTDATA.N.label
              && resultMatrix[userIndex][day + 1] !== TTDATA.N.label
              && resultMatrix[userIndex][day - 1] !== TTDATA.GN.label
              && resultMatrix[userIndex][day + 1] !== TTDATA.GN.label) {
              // verific sa nu fie mai mult de 4 oameni pe tura in aceeasi seara
              let countDayFree = 0;
              for (let column = 0; column < resultMatrix.length; column += 1) {
                if (resultMatrix[column][day] === TTDATA.L.label) {
                  countDayFree += 1;
                }
              }
              if (countDayFree === 1) {
                break;
              }

              resultMatrix[userIndex][day] = TTDATA.N.label;
              userStatus[userId].nights += 1;
            } else { // altfel adaug de 8 ore
              resultMatrix[userIndex][day] = TTDATA.E.label;
              userStatus[userId].norm -= TTDATA.T.value;
              userStatus[userId].norm += TTDATA.E.value;
            }
          }
        }
      }
    }

    console.log(userStatus); //eslint-disable-line
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
