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
      let _res = res[0];
      _res.table_header = JSON.parse(_res.table_header);
      _res.table_data = JSON.parse(_res.table_data);
      _res = {
        ..._res,
        otherTTDates: [],
      };

      return getUsersListAction().then((usersList) => {
        const findUser = (userId) => usersList.find((user) => user.id === userId);
        for (let tableIndex = 0; tableIndex < _res.table_data.length; tableIndex += 1) {
          const tableRow = _res.table_data[tableIndex];
          const userData = findUser(tableRow.userId);
          _res.table_data[tableIndex].username = userData.username;
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
