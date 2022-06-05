const express = require('express');
const ruta = express.Router();

//Controllers
const pokemonAll = require('../controllers/pokemonAll');
const pokemonID = require('../controllers/pokemonID');
const postPokemon = require('../controllers/postPokemon');



//Rutas

ruta.get('/', pokemonAll);
ruta.get('/:id', pokemonID);
ruta.post('/', postPokemon);


module.exports = ruta;