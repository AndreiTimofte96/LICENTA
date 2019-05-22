module.exports = (() => {
  const { getUserPrefAction, putUserPrefAction } = require('../actions/preferences_actions');
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

  const putUserPref = (req, res) => {
    const { id } = req.decoded.user;
    const {
      specialEvents,
      weekendDays,
      month,
      year,
    } = req.body;

    checkReqBodyFields({
      specialEvents,
      weekendDays,
      month,
      year,
    }).then((response) => {
      if (response.status === false) {
        return res.status(400).send(response.res);
      }
      putUserPrefAction({
        id,
        specialEvents,
        weekendDays,
        month,
        year,
      }).then((response1) => {
        if (response1 === true) {
          return res.json({ success: true, message: 'Preferinte updatate cu succes' });
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
    putUserPref
  };
})();
