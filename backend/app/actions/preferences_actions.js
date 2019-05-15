module.exports = (() => {
  const Preferences = require('../models/preferences_model');

  const getUserPrefAction = ({
    id,
  }) => (new Preferences()
    .field('*')
    .where({
      id
    })
    .valueOf()
    .then((res) => {
      const userPref = {
        ...res[0],
        special_events: JSON.parse(res[0].special_events),
        timetable_configurator: JSON.parse(res[0].timetable_configurator)
      };
      return userPref;
    })
  );

  const postUserPrefAction = ({
    id,
    nights_per_week,
    free_weekends,
    night_shifts,
    special_events,
    timetable_configurator,
  }) => {
    const preference_month = new Date().getMonth() + 1;
    return new Preferences()
      .insert()
      .set('user_id', id)
      .set('preference_month', preference_month)
      .set('nights_per_week', nights_per_week)
      .set('free_weekends', free_weekends)
      .set('night_shifts', night_shifts)
      .set('special_events', JSON.stringify(special_events))
      .set('timetable_configurator', JSON.stringify(timetable_configurator))
      .valueOf()
      .then(() => true)
      .catch(() => false);
  };

  return {
    getUserPrefAction,
    postUserPrefAction
  };
})();
