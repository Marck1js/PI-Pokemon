import * as ACCIONES from "../actiontypes";

const initialState = {
   allPokemons: [],
   detailPokemon: {},
   types: [],
   pokename: []
}

export function reducer (state=initialState, action) {
    switch(action.type){
       
        case ACCIONES.API_GET_POKEMONS : return {...state, allPokemons: action.payload};
        case ACCIONES.API_DETAIL_POKEMON: return {...state, detailPokemon: action.payload};
        case ACCIONES.API_GET_TYPES: return {...state, types: action.payload};
        case ACCIONES.GET_ID_POKEMON: return {...state, pokename: action.payload};
        default : return state
    
    }
}