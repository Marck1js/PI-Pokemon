const {Pokemon, Type} = require('../../db');

async function postPokemon (req,res){
     let {name, life, strength, defense, speed, height, weight, types, image}  = req.body;

     try {

     name = name.toLowerCase();
    
     const savePokemon = await Pokemon.create({name, life, strength, defense, speed, height, weight, image});   
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
     
     res.send({id:findPokemon[0].dataValues.id})

    } catch (error) {
       res.send(error)
    }
 }

 module.exports = postPokemon;

