const express = require ('express');
const Joi = require('joi');
const fs = require('fs');
const strani = require('../models/strani');
const uuid = require('uuid');
const router = express.Router();
const { dirname } = require('path');

// Inicializacija.
const appDir = dirname(require.main.filename);

// Domov.
router.get('/', (req, res) => {
    res.sendFile(appDir + '/views/index.html');

// STARO, ki tudi dela
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.readFile('./html/index.html', function(err, content) {
//         res.write(content);
//         res.end("   ");
//    });
});

// ABOUT.
router.get('/about', (req, res) => {
    res.sendFile(appDir + '/views/about.html');
});

// FOOTER, HEADER.
router.get('/footer', (req, res) => {
    res.sendFile(appDir + '/public/html/footer.html');
});

router.get('/header', (req, res) => {
    res.sendFile(appDir + '/public/html/header.html');
});

// PODROBNO.
router.get('/podrobno', (req, res) => {
    res.sendFile(appDir + '/views/podrobno.html');
});

// POSEBNOSTI.
router.get('/posebnosti', (req, res) => {
    res.sendFile(appDir + '/views/posebnosti.html');
});

// FUNKCIONALNOSTI.
router.get('/funkcionalnostiodjemalca', (req, res) => {
    res.sendFile(appDir + '/views/funkodjemalec.html');
});

router.get('/funkcionalnostistreznika', (req, res) => {
    res.sendFile(appDir + '/views/funkstreznik.html');
});

router.get('/podatkovnimodel', (req, res) => {
    res.sendFile(appDir + '/views/podatkovnimodel.html');
});

router.get('/admin', (req, res) => {
    res.sendFile(appDir + '/views/admin.html');
});

// NOva novica.
router.get('/novanovica', (req, res) => {
    res.sendFile(appDir + '/views/formNovica.html');
});



// API segment.
router.get('/api/strani', (req, res) => {
    res.send(strani);
    console.log("Branje VSEH novic.", "Število vpisov: ", strani.length, strani[0].idstrani);
});

// Pridobi eno stran.
router.get('/api/stran/:idstrani', (req, res) => {
    const stran = strani.find(s => s.idstrani === parseInt(req.params.idstrani));
    if (!stran) return res.status(404).send(`Iskana stran ${req.params.idstrani} ne obstaja!`);
    
    res.send(stran);
});

// Pridobi eno stran in podstran.
router.get('/api/stran/:idstrani/:idpodstrani', (req, res) => {
    res.send(req.params);
});

// Objavi novo stran.
router.post('/api/strani', (req, res) => {
    // Validacija (Return 400 - Bad Request).
    const { error } = Joi.validate(req.body, schema);
    if (error) {
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const stran = {
        idstrani: req.body.idstrani,        // strani.length + 1,
        naslov: req.body.naslov,
        vsebina: req.body.vsebina
    };
    strani.push(stran);
    res.send(stran);
});

// Spremeni novico.
router.put('/api/stran/:idstrani', (req, res) => {
    // Preverimo ali stran obstaja (404).
    const stran = strani.find(s => s.idstrani === parseInt(req.params.idstrani));
    if (!stran) {
        res.status(404).send(`Iskana stran ${req.params.idstrani} ne obstaja!`);
        return;
    }

    // Validacija (Return 400 - Bad Request).
    const { error } = Joi.validate(req.body, schema);
    if (error) {
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message);
        return;
    }

    // Sprememba podatkov.
    stran.idstrani = req.body.idstrani;
    stran.naslov = req.body.naslov;
    stran.vsebina = req.body.vsebina;
    res.send(stran);
});

// Brisanje strani.
router.delete('/api/stran/:idstrani', (req, res) => {
    const stran = strani.find(s => s.idstrani === parseInt(req.params.idstrani));
    if (!stran) return res.status(404).send(`Iskana stran ${req.params.idstrani} ne obstaja!`);

    // Brisanje.
    const index = strani.indexOf(stran);
    strani.splice(index, 1);

    // Vrnemo informacijo o brisani strani.
    res.send(stran);
});

// NOVICA NOVO
router.get('/novica', (req, res) => {
    res.render('novica');
});

// Izvozimo poti.
module.exports = router;