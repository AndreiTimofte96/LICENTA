module.exports = (() => {
  const { getTimetableAction } = require('../actions/timetable_actions');

  const { TTDATA } = require('../utils/timetableAlgorithm/utils');

  const getTimeUntilNextShift = (startHour, endHour, day) => {
    const TIMEZONE_OFFSET = 3; // 3 hours
    const currDate = new Date();
    const currMonth = currDate.getMonth() + 1;
    const currYear = currDate.getFullYear();

    const startDate = new Date(new Date().setHours(startHour - TIMEZONE_OFFSET, 0, 0, 0, 0)).setDate(day);
    const endDate = new Date(new Date().setHours(endHour - TIMEZONE_OFFSET, 0, 0, 0, 0)).setDate(day);
    let dateFound = false;
    let startingShiftIn = '';
    let startingShiftDate = null;

    if (new Date() < new Date(startDate)) { // tura incepe in
      const minutes = (new Date(startDate).getTime() - new Date().getTime()) / 3600000 * 60;
      startingShiftIn = `${Math.trunc(minutes / 60)} ${Math.trunc(minutes / 60) === 1 ? 'ora' : 'ore'} si ${Math.trunc(minutes % 60)} ${Math.trunc(minutes % 60) === 1 ? 'minut' : 'minute'}`;
      startingShiftDate = new Date(currYear, currMonth - 1, day).getTime();
      dateFound = true;
    } else if (new Date() < new Date(endDate)) { // suntem de tura;
      startingShiftIn = 'Tura in desfasurare';
      startingShiftDate = new Date(currYear, currMonth - 1, day).getTime();
      dateFound = true;
    }
    return [startingShiftIn, startingShiftDate, dateFound];
  };

  const getHomepageAction = ({ id }) => {
    const currDate = new Date();
    const currDay = currDate.getDate();
    const currMonth = currDate.getMonth() + 1;
    const currYear = currDate.getFullYear();
    let shiftType = '';
    let startingShiftIn = '';
    let startingShiftDate = null;
    const shiftPeople = [];
    let shiftDay = null;
    const nextWeekSchedule = [];
    return getTimetableAction({ month: currMonth, year: currYear, })
      .then((timetable) => {
        const { tableData, tableHeader } = timetable;
        for (let index = 0; index < tableData.length; index += 1) {
          const currUser = tableData[index];
          if (currUser.userId === id) {
            const currData = currUser.data;
            let dateFound = false;
            for (let day = currDay - 1; day < currData.length && !dateFound; day += 1) {
              if (currData[day] !== TTDATA.L.label) {
                // daca tura e azi sa vedem daca a inceput / nu s-a terminat / nu
                if (currData[day] === TTDATA.E.label
                  || currData[day] === TTDATA.T.label
                  || currData[day] === TTDATA.GZI.label) {
                  const result = getTimeUntilNextShift(7, 15, day + 1);
                  [startingShiftIn, startingShiftDate, dateFound] = result;
                  shiftType = currData[day];
                }

                // daca tura de noapte
                if (currData[day] === TTDATA.N.label || currData[day] === TTDATA.GN.label) {
                  const result = getTimeUntilNextShift(19, 24 + 7, day + 1);
                  [startingShiftIn, startingShiftDate, dateFound] = result;
                  shiftType = currData[day];
                }
              }
              shiftDay = day;
            }
            break;
          }
        }

        for (let index = 0; index < tableData.length; index += 1) {
          const currUser = tableData[index];
          if (currUser.userId !== id && currUser.data[shiftDay] !== TTDATA.L.label) {
            shiftPeople.push({ username: currUser.username, shiftType: currUser.data[shiftDay] });
          }
        }

        for (let index = 0; index < tableData.length; index += 1) {
          const currUser = tableData[index];
          if (currUser.userId === id) {
            const currData = currUser.data;
            for (let day = currDay; day < currDay + 7 && day < currData.length; day += 1) {
              nextWeekSchedule.push({ shiftType: currData[day], dayInfo: tableHeader[day] });
            }
          }
        }

        const homepageObj = {
          startingShiftIn,
          startingShiftDate,
          shiftType,
          shiftPeople,
          nextWeekSchedule,
        };
        return homepageObj;
      });
  };
  return {
    getHomepageAction,
  };
})();
