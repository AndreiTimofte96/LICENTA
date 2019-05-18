module.exports = (() => {
  const { getUserPrefAction, postUserPrefAction } = require('../actions/preferences_actions');
  const { checkReqBodyFields } = require('../utils/utils');


  const getUserPref = (req, res) => {
    const { id } = req.decoded.user;
    getUserPrefAction({ id })
      .then((userPreferences) => res.json({ success: true, userPreferences, }))
      .catch((e) => {
        res.status(401);
        console.log(e); //eslint-disable-line
      });
  };

  const postUserPref = (req, res) => {
    const { id } = req.decoded.user;
    const {
      special_events,
      weekend_days
    } = req.body;

    checkReqBodyFields({
      special_events,
      weekend_days
    }).then((response) => {
      if (response.status === false) {
        return res.status(400).send(response.res);
      }
      postUserPrefAction({
        id,
        special_events,
        weekend_days
      }).then((response1) => {
        if (response1 === true) {
          return res.json({ success: true, message: 'Preferinte adaugate cu succes' });
        }
        return res.send(401, 'Eroare! Preferinta deja adaugata pentru aceasta luna!');
      });
    }).catch((e) => {
      res.status(401);
      console.log(e); //eslint-disable-line
    });
  };
  return {
    getUserPref,
    postUserPref
  };
})();
