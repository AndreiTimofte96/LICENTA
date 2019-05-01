module.exports = (() => {
  const User = require('../models/user_model');

  const getUser = ({
    id,
    password,
    mail
  }) => {
    if (id) {
      return new User()
        .field('*')
        .where({
          id
        })
        .valueOf()
        .then((res) => res[0]);
    }

    return new User()
      .field('*')
      .where({
        mail,
        password
      }).valueOf()
      .then((res) => {
        if (res.length > 1) return null;
        return res[0];
      });
  };

  return {
    getUser
  };
})();
