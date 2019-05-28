module.exports = (() => {
  const { getHomepageAction } = require('../actions/homepage_actions');

  const getHomepage = (req, res) => {
    const { id } = req.decoded.user;
    getHomepageAction({ id })
      .then((homepage) => res.json({ success: true, homepage }))
      .catch((e) => {
        res.status(401);
        console.log(e); //eslint-disable-line
      });
  };

  return {
    getHomepage,
  };
})();
