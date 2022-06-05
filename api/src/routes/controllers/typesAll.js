const fetch = require('node-fetch');
const {Type} = require('../../db');


async function typesAll(req,res){

let api = 'https://pokeapi.co/api/v2/type';

const conteo = await Type.findAll();
console.log(conteo.length)


//FUNCIONES 
    const fromApi = async ()=>{
        const data = await fetch(api)
        .then(e=> e.json())
        .then(e=> e.results.map(e=> ({name:e.name})))
        .then(e=>  e);
       
        const info = data.map(async e => await Type.create({name:e.name}));
        console.log('Trayendo desde api')
        res.send(data);

    }

     const fromDb = async ()=> {
        const info = await Type.findAll({attributes: ['name']});
        const dato = info.map(e=> ({name: e.dataValues.name}))
        console.log('Trayendo desde la base de datos');
        res.send(dato);
     }
  
//EJECUCION
     try {
        if(conteo.length == 0){
            await fromApi();
        }else {
            await fromDb();
        }
   
     } catch (error) {
         res.send(error); 
     }

   
}

module.exports = typesAll;