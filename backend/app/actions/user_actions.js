module.exports = (() => {
  const User = require('../models/user_model');

  const getUser = ({
    id,
    password,
    mail
  }) => {
    if (id) {
      return new User()
        .field('mail')
        .field('username')
        .field('password_changed')
        .field('admin')
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

  const changeUserPassword = ({ mail, password, new_password }) => {
    if (mail && password && new_password) {
      return new User()
        .field('*')
        .where({
          mail, password
        }).valueOf()
        .then((res) => {
          if (res.length === 1) {
            return new User()
              .update()
              .set('password', new_password)
              .set('password_changed', 'true')
              .where({ mail, password })
              .valueOf()
              .then(() => true);
          }
          return false;
        });
    }
  };

  return {
    getUser,
    changeUserPassword,

  };
})();
