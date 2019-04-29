module.exports = (() => {
  const jwt = require('jsonwebtoken');
  const { secret, expiryTime } = require('../../config/config');
  const { getUser, newUser } = require('../actions/user_actions');


  const checkAuthenticated = (req, res, next) => {
    const token = req.body.token || req.param('token') || req.headers['x-access-token'];

    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        console.log('decoded', decoded); //eslint-disable-line
        if (err) {
          return res.json({ success: false, message: 'Token invalid' });
        }
        req.decoded = decoded;
        next();
      });
    } else {
      return res.status(403).send({
        success: false,
        message: 'Nu exista un token'
      });
    }
  };

  const authenticate = (req, res) => {
    const { body } = req;
    const { mail, password } = body;

    getUser({ mail, password }).then((user) => {
      console.log(user); //eslint-disable-line
      if (user) {
        const token = jwt.sign({ user }, secret, {
          expiresIn: expiryTime
        });

        res.json({
          success: true,
          message: 'Token provided!',
          token
        });
      } else {
        res.json({ success: false, message: 'Autentificare esuata. Utilizator/parola invalida' });
      }
    }).catch((e) => {
      console.log(e); //eslint-disable-line
    });
  };


  const register = (req, res) => {
    const { body } = req;
    const { mail, password, userName } = body;

    newUser({
      userName,
      mail,
      password
    }).then((user) => {
      console.log('THIS IS USER:', user); //eslint-disable-line
      res.json({
        success: true, message: 'Utilizator creat cu succes!'
      });
    }).catch((e) => {
      console.log(e); //eslint-disable-line
      res.json({ success: false, message: 'Mailul exista deja!' });
    });
  };

  return {
    authenticate,
    register,
    checkAuthenticated
  };
})();
