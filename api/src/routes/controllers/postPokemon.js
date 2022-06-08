const {Pokemon, Type} = require('../../db');

async function postPokemon (req,res){
    let {name, life, strength, defense, speed, height, weight, types}  = req.body;

    
    const savePokemon = await Pokemon.create({name, life, strength, defense, speed, height, weight});   
    const findPokemon = await Pokemon.findAll({where: {name: name}, attributes: ['id']});

    let idPokemon = findPokemon[0].dataValues.id;
    
    const findId = await Type.findAll({attributes: ['name', 'id']});
    const valores = findId.map(e=> e.dataValues);
     
     let IDs = []; 


     if(types){
         types.forEach(element => valores.find(e => e.name === element ? IDs.push(e.id): null));
     
     const upInfo = IDs.forEach(async e=> {
         let info = await Pokemon.findByPk(idPokemon);
         await info.addTypes(e)
       
     });
     }
     console.log('Pokemon Guardado exitosamente')
 
    res.send('Pokemon guardado exitosamente');

}

module.exports = postPokemon;

