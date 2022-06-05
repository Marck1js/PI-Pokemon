const fetch = require('node-fetch');
const axios = require('axios')
const {Pokemon} = require('../../db')


async function pokemonAll(req,res){
    let api = 'https://pokeapi.co/api/v2/pokemon?limit=40'
    let {name} = req.query;
    if(name){
        name = name.toLowerCase();
    }   
  
    const infoApi = async () =>{
        const data = await fetch(api)
        .then(res => res.json())
        .then(e => e.results)
        .then(e => e.map(e => e.url));
   

// IMAGEN, NOMBRE, TIPOS     
        let x = [];
        console.log(x.length);
        for(let i = 0; i < data.length; i++){
           let inf = await fetch(data[i]).then(res=> res.json().then((e)=> ({name: e.name,image: e.sprites.other.dream_world.front_default, types : e.types.map(e => e.type.name)})));
            x.push(inf);
        }
       
        console.log(x.length)

        res.send(x);
    }

    const query = async () => {
       
        const nota = await fetch(api).then(res=> res.json())
        .then(e => e.results)
        .then(e=> e.filter(e=> {
            let x = [];
                if(e.name === name){
                    x.push(e.name)
                }
                return x[0]
        }))
    console.log(nota);
        if(nota.length !== 1){
            
            const infdb = await Pokemon.findAll({where: {name: name},  attributes : ['name', 'id', 'life' , 'strength', 'defense', 'speed', 'height', 'weight']})
            console.log(infdb.length);
            if(infdb.length === 0){
                return res.send({msg: 'Lo siento no hay ningun pokemon en la base de datos ni en la api'})
            }else{
                return res.send(infdb[0]);
            }
        }
        if(nota.length === 1){
            const data = await fetch(nota[0].url)
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
            });
            return res.send(data); 
        }

        

      
    }
   



    try {
        if(name){
            console.log('hay query')
            await  query();
        }else{
            await infoApi();
        }
    } catch (error) {
        res.send(error);        
    }

}

module.exports = pokemonAll;






