const fetch = require('node-fetch');
const {Pokemon, Type} = require('../../db')

async function pokemonID (req,res){
    let {id} = req.params;
    
    if(id){
         console.log(id);
    }

    let api = `https://pokeapi.co/api/v2/pokemon/${id}`;

    let onlynumbers = /^[0-9]+$/
    let regexUuid = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;

    //IMAGEN, NOMBRE TIPO ID (VIDA FUERZA DEFENSA VELOCIDAD ALTURA PESO);

    const onePokemon = async () => {
        const data = await fetch(api)
        .then(res=> res.json())
        .then(e => {
            return {
                name : e.name,
                image: e.sprites.other.dream_world.front_default,
                type: e.types.map(e=> e.type.name),
                id: e.id,
                life: e.stats[0].base_stat,
                strength: e.stats[1].base_stat,
                defense: e.stats[2].base_stat,
                speed: e.stats[5].base_stat,
                height: e.height,
                weight: e.weight
            }
        })     
        return data;
    }

//BUSQUEDA EN LA BASE DE DATOS 



    const oneDatabase = async () => {
      
        const datos = await Pokemon.findAll({where: {id:id}, attributes: ['name','id','life','strength','defense','speed','height','weight', 'image','isDatabase'], include:{model: Type, attributes: ['name'], through: {attributes: []}}});

       const valoresDb = datos.map(e => ({name: e.name, id: e.id, life: e.life, strength: e.strength, defense: e.defense, speed: e.speed, height: e.height, weight: e.weight, image: e.image,isDatabase: e.isDatabase}));

       const type =  datos[0].dataValues.types.map(e => e.dataValues.name);
       valoresDb[0].type = type;  
       
       if(valoresDb[0].type.length === 0){
           delete valoresDb[0].type
       }

         return valoresDb[0];
}


 try {
     if(regexUuid.test(id) && id.length === 36){
         res.send(await oneDatabase());
     }else if(onlynumbers.test(id)){
         res.send(await onePokemon());
     }else {
         res.send('Lo siento, escriba solo numeros o UUID')
     }

 } catch (error) {
     res.send({msg: 'No existe tal pokemon con ese ID'})
}
  

}

module.exports = pokemonID;