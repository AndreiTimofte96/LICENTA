module.exports = (() => {
  const { APP_CONSTS } = require('../utils/utils');
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
      const canModifyPreferences = new Date().getDate() < APP_CONSTS.setPrefLastDay;
      const userPref = {
        specialEvents: JSON.parse(res[0].special_events),
        firstDayInMonth: APP_CONSTS.setPrefFirstDay,
        lastDayInMonth: APP_CONSTS.setPrefLastDay,
        month: res[0].preference_month,
        year: res[0].preference_year,
        weekendDays: JSON.parse(res[0].weekend_days),
        canModifyPreferences,
      };
      return userPref;
    })
  );

  const getAllUsersPrefAction = ({
    month,
    year
  }) => (new Preferences()
    .field('*')
    .where({
      month,
      year
    })
    .valueOf()
    .then((res) => {
      Object.keys(res).map((key) => {
        res[key].special_events = JSON.parse(res[key].special_events);
        return '';
      });
      return res;
    })
  );

  const putUserPrefAction = ({
    id,
    specialEvents,
    weekendDays,
    month,
    year
  }) => {
    // setting for next month
    return new Preferences()
      .update()
      .set('special_events', JSON.stringify(specialEvents))
      .set('weekend_days', JSON.stringify(weekendDays))
      .where({
        id, month, year
      })
      .valueOf()
      .then(() => true)
      .catch(() => false);
  };

  return {
    getUserPrefAction,
    getAllUsersPrefAction,
    putUserPrefAction
  };
})();
