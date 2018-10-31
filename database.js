const mongoose = require('mongoose');

const URI = 'mongodb://User:Heroku1*@ds147592.mlab.com:47592/heroku_m5bjc2zk';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
