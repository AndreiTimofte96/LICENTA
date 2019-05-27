module.exports = (() => {
  const User = require('../models/user_model');

  const getUser = ({
    id,
    password,
    mail
  }) => {
    if (id) {
      return new User()
        .field('id')
        .field('mail')
        .field('username')
        .field('password_changed')
        .field('admin')
        .where({
          id
        })
        .valueOf()
        .then((res) => {
          let _res = res[0];
          _res = {
            ..._res,
            passwordChanged: JSON.parse(_res.password_changed)
          };
          delete _res.password_changed;
          return _res;
        });
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

  const changeUserPassword = ({ mail, password, newPassword }) => {
    if (mail && password && newPassword) {
      return new User()
        .field('*')
        .where({
          mail, password
        }).valueOf()
        .then((res) => {
          if (res.length === 1) {
            return new User()
              .update()
              .set('password', newPassword)
              .set('password_changed', 'true')
              .where({ mail, password })
              .valueOf()
              .then(() => true);
          }
          return false;
        });
    }
  };

  const getUsersListAction = () => new User()
    .field('id')
    .field('username')
    .valueOf()
    .then((res) => res);

  return {
    getUser,
    changeUserPassword,
    getUsersListAction

  };
})();
