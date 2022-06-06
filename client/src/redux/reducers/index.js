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
        case ACCIONES.SET_DETAIL: return {...state, detailPokemon: []}
        case ACCIONES.API_GET_POKEMONS : return {...state, allPokemons: action.payload, default: action.payload};
        case ACCIONES.API_DETAIL_POKEMON: return {...state, detailPokemon: action.payload};
        case ACCIONES.API_GET_TYPES: return {...state, types: action.payload};
        case ACCIONES.GET_ID_POKEMON: return {...state, pokename: action.payload};
        case ACCIONES.ORDER_BY_NAME: 
            let order = [...state.allPokemons];
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
                let fuerza = [...state.allPokemons];
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

        default : return state
    
    }
}