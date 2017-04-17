// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

// Get our API routes
const articleRouter = require('./routes/article.api');
const memberRouter = require('./routes/member.api');
const socialRouter = require('./routes/social.api');
const studentRouter = require('./routes/student.api');
const thesisRouter = require('./routes/thesis.api');

const app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://user:password@ds157040.mlab.com:57040/labo', function (error) {

  if (error) throw error;
}); // connect to our database

// Parsers for POST data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Set our api routes
app.use('/api', articleRouter);
app.use('/api', memberRouter);
app.use('/api', socialRouter);
app.use('/api', studentRouter);
app.use('/api', thesisRouter);

app.use(cors());

// Catch all other routes and return the index file
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () {
  console.log("Labo running on localhost:" + port);
});
