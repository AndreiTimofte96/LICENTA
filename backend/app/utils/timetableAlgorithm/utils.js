module.exports = (() => {
  const TTDATA = {
    L: { label: 'L', value: 0 },
    N: { label: 'N', value: 12 },
    T: { label: '12', value: 12 },
    E: { label: '8', value: 8 },
    GZI: { label: 'Gzi', value: 12 },
    GN: { label: 'Gn', value: 12 }
  };

  const TTRULES = {
    freeDays: 15,
    maxNights: 5,
    maxNightsPerDay: 2,
    maxFreePerDay: 3,
    maxFreeInRow: 3,
    maxFreeDaysInWeek: 5,
    maxNightsInWeek: 2,
    maxGuardNights: 2,
  };

  const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));

  const checkIfWeekendDay = (day, month, year) => {
    const _day = new Date(year, month - 1, day).getDay();
    if (_day === 0 || _day === 6) return true;
    return false;
  };
  const checkIfFreeDayFromGovernment = (day, month, year) => {
    const _day = JSON.stringify(day);
    // const specialDays; // de luat in considerare Pastele, Rusaliile etc...
    const generalDays = [
      {
        day: '1',
        month: '1',
      }, {
        day: '2',
        month: '1',
      }, {
        day: '24',
        month: '1',
      }, {
        day: '1',
        month: '5',
      }, {
        day: '1',
        month: '6',
      }, {
        day: '15',
        month: '8',
      }, {
        day: '30',
        month: '11',
      }, {
        day: '1',
        month: '12',
      }, {
        day: '25',
        month: '12',
      }, {
        day: '26',
        month: '12',
      }
    ];
    const response = generalDays.find((generalDay) => (
      generalDay.day === _day && generalDay.month === month));

    if (response) return true;
    return false;
  };

  const getMonthNorm = (month, year, daysInMonth) => {
    let weekendDays = 0;
    for (let day = 1; day <= daysInMonth; day += 1) {
      const weekDay = new Date(year, month - 1, day).getDay();
      if (weekDay === 0 || weekDay === 6) {
        weekendDays += 1;
      } else if (checkIfFreeDayFromGovernment(day, month, year) === true) {
        weekendDays += 1;
      }
    }
    return (daysInMonth - weekendDays) * 8;
  };

  const getDayNames = (month, year) => {
    const days = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    const daysInMonth = new Date(year, month, 0).getDate();
    const daysArr = [];
    for (let dayNo = 1; dayNo <= daysInMonth; dayNo += 1) {
      const d = new Date(year, month - 1, dayNo);
      const dayName = days[d.getDay()];
      daysArr.push({
        dayNo,
        dayName,
      });
    }
    return daysArr;
  };

  const permuteArray = (arr) => {
    const permArr = [];
    const usedChars = [];
    const permute = (input) => {
      let ch;
      for (let i = 0; i < input.length; i += 1) {
        ch = input.splice(i, 1)[0]; //eslint-disable-line
        usedChars.push(ch);
        if (input.length === 0) {
          permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
      }
      return permArr;
    };
    return permute(arr);
  };

  const shuffleArray = (array) => {
    const _array = [...array];
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [_array[i], _array[j]] = [_array[j], _array[i]];
    }
    return _array;
  };

  const respectsAllConstraints = (resultMatrix, arr, day, month, year, userStatus) => {
    const solveDayShift = (userIndex) => {
      // ultima zi nu a fost tot noapte sau zi
      if (resultMatrix[userIndex][day - 1]
        && (resultMatrix[userIndex][day - 1] === TTDATA.N.label
          || resultMatrix[userIndex][day - 1] === TTDATA.T.label)) {
        return false;
      }
      // maxim 2 zile legate
      let shiftDays = 0;
      for (let dayIndex = day - 1; dayIndex >= 0 && dayIndex >= day - 3; dayIndex -= 1) {
        if (resultMatrix[userIndex][dayIndex] === TTDATA.T.label) {
          shiftDays += 1;
        }
      }
      if (shiftDays >= 2) return false;
      return true;
    };
    const solveNight = (userIndex) => {
      // const userId = resultMatrix[userIndex][0];
      // if (userStatus[userId].nights > TTRULES.maxNightsInWeek) return false;

      // ultima zi nu a fost tot noapte sau zi
      if (resultMatrix[userIndex][day - 1]
        && (resultMatrix[userIndex][day - 1] === TTDATA.N.label
          || resultMatrix[userIndex][day - 1] === TTDATA.T.label)) {
        return false;
      }

      // maxim 2 nopti intr-o saptamana
      let weekNights = 0;
      for (let dayIndex = day - 1; dayIndex >= 0 && dayIndex >= day - 7; dayIndex -= 1) {
        if (resultMatrix[userIndex][dayIndex] === TTDATA.N.label
          || resultMatrix[userIndex][dayIndex] === TTDATA.GN.label) {
          weekNights += 1;
        }
      }
      if (weekNights >= TTRULES.maxNightsInWeek) return false;
      return true;
    };
    const solveFreeDay = (userIndex) => {
      let freeDays = 0;
      // maxim 5 libere intr-o saptamana
      for (let dayIndex = day - 1; dayIndex >= 0 && dayIndex >= day - 7; dayIndex -= 1) {
        if (resultMatrix[userIndex][dayIndex] === TTDATA.L.label
          && !checkIfWeekendDay(day, month, year)) {
          freeDays += 1;
        }
      }
      if (freeDays >= TTRULES.maxFreeDaysInWeek) return false;

      return true;
    };
    const solveWeekNight = (userIndex) => {
      if (resultMatrix[userIndex][day - 1]
        && (resultMatrix[userIndex][day - 1] === TTDATA.GN.label
          || resultMatrix[userIndex][day - 1] === TTDATA.N.label
          || resultMatrix[userIndex][day - 1] === TTDATA.T.label)) {
        return false;
      }

      // garzi din 2 in 2 sapt
      if (resultMatrix[userIndex][day - 7] === TTDATA.GN.label
        || resultMatrix[userIndex][day - 6] === TTDATA.GN.label
        || resultMatrix[userIndex][day - 8] === TTDATA.GN.label) {
        return false;
      }


      // verificare nr maxim de garzi
      const userId = resultMatrix[userIndex][0];
      if (userStatus[userId].weekNights >= TTRULES.maxGuardNights) return false;

      // daca exista un user cu 0 garzi, return false ca sa-l alegi pe acela
      let userHasGuardZero = false;
      Object.keys(userStatus).map(key => {
        if (userStatus[key].weekNights === 0) {
          userHasGuardZero = true;
        }
        return '';
      });
      if (userStatus[userId] >= 1 && userHasGuardZero) return false;

      return true;
    };

    for (let index = 0; index < arr.length; index += 1) {
      switch (arr[index]) {
        case TTDATA.T.label:
          if (solveDayShift(index) === false) return false;
          break;
        case TTDATA.N.label:
          if (solveNight(index) === false) return false;
          break;
        case TTDATA.L.label:
          if (solveFreeDay(index) === false) return false;
          break;
        case TTDATA.GN.label:
          if (solveWeekNight(index) === false) return false;
          break;
        default:
          return false;
      }
    }

    return true;
  };

  const checkInsertShift = (resultMatrix, userIndex, day) => {
    if (resultMatrix[userIndex][day - 1] === TTDATA.N.label
      || resultMatrix[userIndex][day + 1] === TTDATA.T.label) {
      return false;
    }

    // verific sa nu fie mai mult de 4 oameni pe tura in aceeasi seara
    let countDayShifts = 0;
    for (let column = 0; column < resultMatrix.length; column += 1) {
      if (resultMatrix[column][day] === TTDATA.T.label) {
        countDayShifts += 1;
      }
    }
    if (countDayShifts >= 3) {
      return false;
    }
    return true;
  };
  return {
    TTDATA,
    TTRULES,
    getMonthNorm,
    checkIfWeekendDay,
    getRandomInt,
    getDayNames,
    permuteArray,
    shuffleArray,
    respectsAllConstraints,
    checkInsertShift
  };
})();
