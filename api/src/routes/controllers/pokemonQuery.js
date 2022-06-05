const infoQuery = async () =>{
  
    const searchDb = async () => {

        const searchDatabase = await Pokemon.findAll({where: {name: name}, attributes: ['name', 'id', 'life', 'strength', 'defense','speed', 'height' ,'weight']});
        
        let informacion = searchDatabase[0].dataValues
        return informacion;   
    }

    const searchWeb = async () =>{
       let api = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const search = await fetch(api).then(res=> res.json());
        .then(e => console.log(e.length))

        res.send('holis mi reychi')
    }
    await searchWeb()
   
}