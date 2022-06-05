const {Pokemon} = require('../../db');

async function postPokemon (req,res){
    let {name, life, strength, defense, speed, height, weight} = req.body;
    
    const savePokemon = await Pokemon.create({name, life, strength, defense, speed, height, weight});
    res.send('Pokemon guardado exitosamente');
}

module.exports = postPokemon;