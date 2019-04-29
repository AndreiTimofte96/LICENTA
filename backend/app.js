const express = require('express');

const chalk = require('chalk'); // pt colorare mesaje
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // afiseaza ce req sunt facute
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const { authenticate, register, checkAuthenticated } = require('./app/routes/authenticate_routes');

app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Hello! The API is at http://localhost/api');
});

app.get('/intro', (req, res) => {
  res.json({
    success: true,
    message: 'Aici (va) zace licenta mea!'
  });
});

app.post('/authenticate', authenticate);
app.post('/register', register);


const apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.use(checkAuthenticated);

apiRoutes.get('/', (req, res) => {
  res.json({ success: true, message: 'This is my API!' });
});

// apiRoutes.get('/books', allBooks);


app.listen(PORT, () => {
  debug(`listening at port ${chalk.green(PORT)}`);
});
