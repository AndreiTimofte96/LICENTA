module.exports = (() => {
  const jwt = require('jsonwebtoken');
  const { secret, expiryTime } = require('../../config/config');
  const { getUser } = require('../actions/user_actions');
  const { checkReqBodyFields } = require('../utils/utils');

  const checkAuthenticated = (req, res, next) => {
    const token = req.body.token || req.param('token') || req.headers['x-access-token'];

    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        console.log('decoded', decoded); //eslint-disable-line
        if (err) {
          return res.status(403).send({
            success: false,
            message: 'Token invalid'
          });
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

    checkReqBodyFields({ mail, password }).then((response) => {
      if (response.status === false) {
        return res.status(400).send(response.res);
      }
    });

    getUser({ mail, password }).then((user) => {
      console.log(user); //eslint-disable-line
      if (user) {
        const token = jwt.sign({ user }, secret, {
          expiresIn: expiryTime
        });

        return res.json({
          success: true,
          message: 'Token provided!',
          token
        });
      }
      return res.send(401, 'Autentificare esuata. Email/parola invalida');
    }).catch((e) => {
      res.status(401);
      console.log(e); //eslint-disable-line
    });
  };

  return {
    authenticate,
    checkAuthenticated
  };
})();
