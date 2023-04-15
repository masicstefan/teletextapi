const express = require('express');
const postControllers = require('../controllers/postControllers');
const routerNovice = express.Router();

routerNovice
    .route("/novice")
    .get(postControllers.getAllNovice)
    .post(postControllers.createNewNovica);

routerNovice
    .route("/novice/:id")
    .get(postControllers.getNovicaById);


module.exports = routerNovice;