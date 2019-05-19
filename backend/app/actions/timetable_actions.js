module.exports = (() => {
  const Timetable = require('../models/timetable_model');
  const { getUsersListAction } = require('../actions/user_actions');

  const getTimetableAction = ({
    month,
    year
  }) => new Timetable()
    .field('*')
    .where({
      month,
      year
    })
    .valueOf()
    .then((res) => {
      const _res = {
        currentTTDate: { month: res[res.length - 1].month, year: res[res.length - 1].year },
        monthNorm: res[res.length - 1].month_norm,
        otherTTDates: [],
        tableHeader: JSON.parse(res[res.length - 1].table_header),
        tableData: JSON.parse(res[res.length - 1].table_data),
      };

      return getUsersListAction().then((usersList) => {
        const findUser = (userId) => usersList.find((user) => user.id === userId);
        for (let tableIndex = 0; tableIndex < _res.tableData.length; tableIndex += 1) {
          const tableRow = _res.tableData[tableIndex];
          const userData = findUser(tableRow.userId);
          _res.tableData[tableIndex].username = userData.username;
        }
        return _res;
      });
    });

  const postTimetable = ({
    month,
    year,
    monthNorm,
    tableHeader,
    tableData,
  }) => new Timetable()
    .insert()
    .set('month', month)
    .set('year', year)
    .set('table_header', JSON.stringify(tableHeader))
    .set('table_data', JSON.stringify(tableData))
    .set('month_norm', monthNorm)
    .valueOf()
    .then(() => true)
    .catch(() => false);

  return {
    getTimetableAction,
    postTimetable
  };
})();
