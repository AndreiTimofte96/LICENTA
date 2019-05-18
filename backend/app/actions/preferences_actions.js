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

  const postUserPrefAction = ({
    id,
    special_events,
    weekend_days
  }) => {
    const preference_month = new Date().getMonth() + 1;
    return new Preferences()
      .insert()
      .set('user_id', id)
      .set('preference_month', preference_month)
      .set('special_events', JSON.stringify(special_events))
      .set('weekend_days', weekend_days)
      .valueOf()
      .then(() => true)
      .catch(() => false);
  };

  return {
    getUserPrefAction,
    getAllUsersPrefAction,
    postUserPrefAction
  };
})();
