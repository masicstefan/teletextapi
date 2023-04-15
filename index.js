require('dotenv').config();
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const straniRouter = require('./routes/straniRoutes.js');   // Navadne HTML poti
const noviceRouter = require('./routes/postRoutes.js');     // GET, POST poti
// const strani = require('./models/strani.js');
const normalizePort = require('./middleware/mojefunkcije');
const path = require('path');
const sqlite3 = require("sqlite3").verbose();


// Oblikovanje podatkovne baze v pomnilniku.
let sqlCreate = "CREATE TABLE novica (StevilkaStrani int, NazivNovice TEXT, OpisNovice TEXT, OznakaKategorije TEXT)";
let sqlInsert = "INSERT INTO novica VALUES (?, ?, ?, ?)";
let sqlSelect = "SELECT StevilkaStrani, NazivNovice, OpisNovice, OznakaKategorije FROM novica";
let sqlSteviloNovic = "SELECT COUNT(StevilkaStrani) SteviloStrani FROM novica";

let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Povezava do IN-MEMORY SQLite podatkovne baze ze vzpostavljena!');
});

// Oblikovanje tabele 
db.serialize(function() {
    db.run(sqlCreate);

    // Inicialni vnos podatkov v tabelo.
    var stmt = db.prepare(sqlInsert);
    stmt.run(112, 'Najnižja rast števila upokojencev', 'Lani je bilo prejemnikov pokojnin v povprečju malenkost več kot 628 tisoč.', 'Novica');
    stmt.run(144, 'Posli največjega orožarja cvetijo', 'Posel podjetij, ki proizvajajo vojaško in obrambno opremo, cvetijo.', 'Novica');
    stmt.run(111, '25 let od potresa v posočju', 'Zgornje Posočje je na velikonočno nedeljo pred 25 leti stresel najmočnejši potres.', 'Novica');
    stmt.run(503, 'NBA sprožil preiskavo Dallasa', 'Liga NBA je začela preiskavo srečanja z Dallasom in Chicagom.', 'Šport');
    stmt.run(161, 'Napoved za Slovenijo', 'Popoldne bo povečini sončno.', 'Vreme');
    stmt.finalize();
});

// Prikaz podatkov - ZAENKRAT ZAKOMENTIRANO. 
// db.serialize(function() {
//     // Prikaz vseh novic.
//     db.each(sqlSelect,
//         (err, row) => {
//             if (err) {
//                 console.error(err.message);
//             }
//             console.log(`Stran: ${row.StevilkaStrani}, Naziv: ${row.NazivNovice}, Opis: ${row.OpisNovice}, Kategorija: ${row.OznakaKategorije}`);
//         });
    
//     // Prikaz števila novic.
//     db.each(sqlSteviloNovic,
//         (err, row) => {
//             if (err) {
//                 console.error(err.message);
//             }
//             console.log(`MATCO Teletex ima trenutno ${row.SteviloStrani} novice.`);
//         });

// });


// Zapiranje povezave do baze.
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
})


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

// TEST po videu.
app.use('/', noviceRouter);


app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Nekaj je ZELOOO narobe!",
    });
});


var port = process.env.PORT || '3000';
app.set('port', port);


app.listen(port, () => console.log(`Strežnik deluje na portu: ${port} ...`));