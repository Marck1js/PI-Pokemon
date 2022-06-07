import { SUMAR_DINERO, RESTAR_DINERO, API_GET_POKEMONS, API_DETAIL_POKEMON, API_GET_TYPES, GET_ID_POKEMON, ORDER_BY_NAME, ORDER_BY_STRENGTH, SET_DETAIL, SET_POKENAME, FILTER_BY_TYPE  } from "../actiontypes"; 



function apiGetPokemons () {
    return async (dispatch) => {
       await fetch('http://localhost:3001/pokemons')
        .then(res=> res.json())
        .then(pokemon => {
            return dispatch(
                {
                    type: API_GET_POKEMONS,
                    payload: pokemon
                }
            )
        }) 
    }}  

    function apiDetailPokemon (id) {
        return async (dispatch) => {
           await fetch(`http://localhost:3001/pokemons/${id}`)
            .then(res=> res.json())
            .then(pokemon => {
                return dispatch(
                    {
                        type: API_DETAIL_POKEMON,
                        payload: pokemon
                    }
                )
            }) 
        }}      

    function apiGetTypes () {
        return async(dispatch) => {
            await fetch(`http://localhost:3001/types`)
            .then(res=> res.json())
            .then(types => {
                return dispatch(
                    {
                        type: API_GET_TYPES,
                        payload: types
                    }
                )
            })
        }
    }


    function getIdPokemon (name) {
        return async(dispatch) => {
            await fetch(`http://localhost:3001/pokemons?name=${name}`)
            .then(res=> res.json())
            .then(name => {
                return dispatch(
                    {
                        type: GET_ID_POKEMON,
                        payload: name
                    }
                )
            })
        }
    }


    function orderByName (value) {
        return {
            type: ORDER_BY_NAME,
            payload: value
        }
    }

    function orderByStrength (value){
        return {
            type: ORDER_BY_STRENGTH,
            payload: value
        }
    }



function sumarDinero () {
    return {
        type: SUMAR_DINERO
    }
}

function restarDinero () {
    return {
        type: RESTAR_DINERO
    }
}
function setDetail () {
    return {
        type: SET_DETAIL
    }
}

function setPokename () {
    return {
        type: SET_POKENAME
    }
}

function filterByType (value) {
      return {
        type: FILTER_BY_TYPE,
        payload: value
    }
}

export {
    filterByType,
    setPokename,
    setDetail,
    orderByStrength,
    orderByName,
    getIdPokemon,
    apiGetTypes,
    apiGetPokemons,
    sumarDinero,
    restarDinero,
    apiDetailPokemon
}