module.exports = (() => {
  const User = require('../models/user_model');

  const newUser = ({
    username,
    mail,
    password
  }) => new User()
    .insert()
    .set('password', password)
    .set('mail', mail)
    .set('username', username)
    .valueOf()
    .then(() => true);

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
    newUser,
    getUser
  };
})();
