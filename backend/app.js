const express = require('express');

const chalk = require('chalk'); // pt colorare mesaje
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // afiseaza ce req sunt facute
// const timetableSchedule = require('node-schedule');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


const {
  authenticate, checkAuthenticated,
  userMe, resetPassword,
} = require('./app/routes/authenticate_routes');

const {
  putUserPref,
  getUserPref
} = require('./app/routes/preferences_routes');

const {
  getTimetable
} = require('./app/routes/timetable_routes');

const {
  getHomepage
} = require('./app/routes/homepage_routes');

const {
  uploadFile,
  uploadMiddleware
} = require('./app/routes/uploadFiles_routes');

const { timetableAlgorithm } = require('./app/utils/timetableAlgorithm/main');

// timetableSchedule.scheduleJob('5 * * * * *', () => {
//   console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTT');
//   timetableAlgorithm('5', '2019', {});
// });

// setInterval(() => {
//   console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTT');
//   timetableAlgorithm('5', '2019', {});
// }, 10000);

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  timetableAlgorithm('6', '2019');
  res.send('Hello! The API is at http://localhost/api');
});

app.post('/authenticate', authenticate);
// app.post('/register', register);

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.use(checkAuthenticated);

apiRoutes.get('/', (req, res) => {
  res.json({ success: true, message: 'This is my API!' });
});

apiRoutes.get('/userMe', userMe);
apiRoutes.put('/resetPassword', resetPassword);

// homepage
apiRoutes.get('/homepage', getHomepage);
// homepage

// preferences
apiRoutes.get('/userPreferences', getUserPref);
apiRoutes.put('/userPreferences', putUserPref);

apiRoutes.post('/uploadPicture', uploadMiddleware, uploadFile);
// preferences

// timetable
apiRoutes.get('/getTimetable/:month/:year', getTimetable);
// timetable


app.listen(PORT, () => {
  debug(`listening at port ${chalk.green(PORT)}`);
});

// ALTER TABLE `itemcategory` ADD `aaa` ENUM('false', 'true') NOT NULL DEFAULT 'false'
