module.exports = (() => {
  const multer = require('multer');
  const fs = require('fs');
  const { postUserPicture, getUser } = require('../actions/user_actions');
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, `${new Date().toISOString()}${file.originalname}`);
    },
  });

  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  const uploadMiddleware = multer({
    storage,
    limits: {
      fileSize: 1024 * 1024 * 20
    },
    fileFilter
  }).single('profileImage');

  const uploadFile = (req, res) => {
    const { id } = req.decoded.user;
    const pictureUrl = `${req.protocol}://${req.get('host')}/${req.file.path}`;
    const file = {
      url: pictureUrl
    };
    getUser({ id }).then((userPref) => {
      if (userPref.pictureUrl) {
        const toDeleteFileName = userPref.pictureUrl.split('uploads/')[1];
        fs.unlink(`uploads/${toDeleteFileName}`);
      }
      postUserPicture({ id, pictureUrl }).then(() => {
        res.json({ success: true, message: 'Poza incarcata!', file });
      });
    }).catch(() => {
    });
  };

  return {
    uploadFile,
    uploadMiddleware,
  };
})();
