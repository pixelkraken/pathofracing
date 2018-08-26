// server.js required files
const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const cron = require("node-cron");

// initialize our express app
const app = express();

let port = 8080;

/* Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost/PathOfRacing_Dev';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
*/


// schedule tasks to be run on the server   


const character = require('./routes/character.route.js'); // Imports routes for the products

app.use('/character', character);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

cron.schedule('*/5 * * * * *', function(){
    console.log('running a task every 5 seconds');
  });





