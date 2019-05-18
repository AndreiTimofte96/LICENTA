module.exports = (() => {

  const TTDATA = {
    L: { label: 'L', value: 0 },
    N: { label: 'N', value: 12 },
    T: { label: '12', value: 12 },
    E: { label: '8', value: 8 },
    GZI: { label: 'G zi', value: 0 },
    GN: { label: 'G n', value: 12 }
  };

  const TTRULES = {
    freeDays: 14,
  };

  const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));

  const checkIfWeekendDay = (day, month, year) => {
    const _day = new Date(year, month - 1, day).getDay();
    if (_day === 0 || day === 6) return true;
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

  return {
    TTDATA,
    TTRULES,
    getMonthNorm,
    checkIfWeekendDay,
    getRandomInt,
    getDayNames
  };
})();
