import * as ACCIONES from "../actiontypes";

const initialState = {
   allPokemons: [],
   detailPokemon: [],
   types: [],
   pokename: [],
   default: []
}

export function reducer (state=initialState, action) {
    switch(action.type){
        case ACCIONES.SET_POKENAME : return {...state, pokename: []};
        case ACCIONES.SET_DETAIL: return {...state, detailPokemon: []};
        case ACCIONES.API_GET_POKEMONS : return {...state, allPokemons: action.payload, default: action.payload};
        case ACCIONES.API_DETAIL_POKEMON: return {...state, detailPokemon: action.payload};
        case ACCIONES.API_GET_TYPES: return {...state, types: action.payload};
     
        case ACCIONES.ORDER_BY_NAME: 
            let order = [...state.default];
            if(action.payload === 'asc'){
                order.sort((a,b)=>{
                    if(a.name > b.name) return 1
                  if(b.name > a.name) return -1
                  return 0;
                });
                }
            if(action.payload === 'des'){
                order.sort((a,b)=>{
                    if(a.name > b.name) return 1
                  if(b.name > a.name) return -1
                  return 0;
                }).reverse()
            } 
            if(action.payload === 'all'){
                order = [...state.default]
            }
            return {...state, allPokemons: order};
        case ACCIONES.ORDER_BY_STRENGTH: 
                let fuerza = [...state.default];
                if(action.payload === 'mayor'){
                    fuerza.sort((a,b)=>{
                        if(a.strength > b.strength) return 1
                      if(b.strength > a.strength) return -1
                      return 0;
                    })
                }
                if(action.payload === 'menor'){
                    fuerza.sort((a,b)=>{
                        if(a.strength > b.strength) return 1
                      if(b.strength > a.strength) return -1
                      return 0;
                    }).reverse();
                }
                return {...state, allPokemons: fuerza};

        case ACCIONES.GET_ID_POKEMON: 
                   if(action.payload.msg){
                       return {...state, pokename: action.payload}
                   } else {
                     
                        
                      return {...state, allPokemons: action.payload}
                   } ;
        case ACCIONES.FILTER_BY_TYPE: 
        let dato = [...state.default];
        if(action.payload === 'all'){
            return {...state, allPokemons: dato};
        }else {
            let flt = dato.filter(e => e.types.find(e=> e.name === action.payload));
             if(flt.length === 0){
                 flt = 'x';
             }
            return {...state, allPokemons: flt}
        };
        case ACCIONES.FILTER_BY_ORIGIN: 
        let origen = [...state.default];
        if(action.payload === 'db'){
            let nuevodb = origen.filter(e => e.isDatabase === true);
            if(nuevodb.length === 0){
                nuevodb = 'x';
            }
            return {...state, allPokemons: nuevodb}
        }
        if(action.payload === 'api'){
            let nuevoapi = origen.filter(e => e.isDatabase !== true)
            return {...state, allPokemons: nuevoapi}
        }
        if(action.payload === 'all'){
            return {...state, allPokemons: origen}
        };
        case ACCIONES.POST_POKEMON:
            let dasd = {...action.payload};
          let inf = [...state.default, dasd];
           return {...state, default: inf, allPokemons: inf};


   
                

        default : return state
    
    }
}