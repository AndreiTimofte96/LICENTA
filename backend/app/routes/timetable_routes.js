module.exports = (() => {
  const { getTimetableAction } = require('../actions/timetable_actions');

  const getTimetable = (req, res) => {
    const { month, year } = req.params;
    getTimetableAction({ month, year })
      .then((timetable) => res.json({ success: true, timetable, }))
      .catch((e) => {
        res.status(401);
        console.log(e); //eslint-disable-line
      });
  };

  return {
    getTimetable
  };
})();
