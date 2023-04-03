const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const straniRouter = require('./routes/strani.js');
const strani = require('./models/strani.js');
const normalizePort = require('./middleware/mojefunkcije');
const path = require('path');
// const novica = require('./routes/index.js');



// APLIKACIJA.
const app = express();

// Statične zbirke
app.use(express.static('public'));
app.use('/css', express.static(__dirname = 'public/css'));
app.use('/js', express.static(__dirname = 'public/js'));
app.use('/img', express.static(__dirname = 'public/img'));
app.use('/fonts', express.static(__dirname = 'public/fonts'));
app.use('/html', express.static(__dirname = 'public/html'));

// Novice.
//app.use('/novica', novica);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', straniRouter);


var port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => console.log(`Strežnik deluje na portu: ${port} ...`));