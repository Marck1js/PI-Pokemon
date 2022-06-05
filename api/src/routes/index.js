const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const rutaPokemons = require('./methods/rutaPokemons');
const rutaTypes = require('./methods/rutaTypes');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', rutaPokemons);
router.use('/types', rutaTypes);

module.exports = router;
