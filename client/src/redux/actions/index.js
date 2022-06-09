import { SUMAR_DINERO, RESTAR_DINERO, API_GET_POKEMONS, API_DETAIL_POKEMON, API_GET_TYPES, GET_ID_POKEMON, ORDER_BY_NAME, ORDER_BY_STRENGTH, SET_DETAIL, SET_POKENAME, FILTER_BY_TYPE, FILTER_BY_ORIGIN, POST_POKEMON, SEARCH_BY_NAME } from "../actiontypes"; 




function seachByName (value) {
    return async (dispatch) => {
        await fetch(`http://localhost:3001/pokemons?name=${value}`)
        .then(res => res.json())
        .then(resultado => {
            return dispatch(
                {
                    type: SEARCH_BY_NAME,
                    payload: resultado
                }
            )
        })
    }
}



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

    function postPokemon (value){
      return async (dispatch) => {
          await fetch(`http://localhost:3001/pokemons`, {
              method: 'POST',
              headers: {
                  'Content-Type' : 'application/json'
              },
              body: JSON.stringify(value)
          }).then(e => e.json()).then(e => {
              let s = {...e}
              let d = {...value}
              let tipo = [...value.types];
              let mix = tipo.map(e=> ({name: e}));
              d.types = mix
              d.id = s.id
              d.isDatabase = true
              return d;
          }).then(e => {
              return dispatch(
                  {
                      type: POST_POKEMON,
                      payload: e
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

function filterByOrigin (value) {
    return {
        type: FILTER_BY_ORIGIN,
        payload: value
    }
}




export {
    seachByName,
    postPokemon,
    filterByOrigin,
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