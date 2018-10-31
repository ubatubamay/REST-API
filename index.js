const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use('/', require('./routes/test.routes'));
app.use('/api/movies', require('./routes/movie.routes'));
app.use('/api/evaluations', require('./routes/evaluation.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
