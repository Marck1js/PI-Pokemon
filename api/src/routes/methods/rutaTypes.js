const express = require('express');
const ruta = express.Router();

//Controllers
const typesAll = require('../controllers/typesAll');

//Rutas
ruta.get('/', typesAll);



module.exports = ruta;