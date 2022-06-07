import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom' 
import { getIdPokemon, apiGetTypes, orderByName, orderByStrength, setPokename, filterByType } from "../../redux/actions"; 
import Estilos from './NavBar.module.css';

export default function NavBar() {
    
    const dispatch = useDispatch();

    const pokemonsTypes = useSelector((state) => state.types);

   useEffect(()=>{
       if(pokemonsTypes.length === 0){
           dispatch(apiGetTypes())
        }
   },[]);

    const handleName = (e) =>{
        e.preventDefault();
        dispatch(orderByName(e.target.value));
    }   


    const handleStrength = (e) => {
        e.preventDefault();
        dispatch(orderByStrength(e.target.value));
    }

    const handleTypes = (e) => {
        e.preventDefault();
        dispatch(filterByType(e.target.value));
        
    }

return (
    <>
    <div className={Estilos.contenedor}>
      

        <div className={Estilos.div}>
            <Link to='/create'>
            <button className={Estilos.btnCreate}>Crea un Pokemon</button>
            </Link>
        </div>

        <div className={Estilos.divFiltro}>     
        <select className={Estilos.select} name='alfabeto' onChange={(e)=> handleName(e)}>
            <option value='all'>Defecto</option>
            <option value='asc'>A-Z</option>
            <option value='des'>Z-A</option>
        </select>
        </div>

        <div className={Estilos.divFuerza}>
        <select className={Estilos.select} name='fuerza' onChange={(e)=> handleStrength(e)}>
            <option>Ordenar por Fuerza</option>
            <option value='menor'>Mayor</option>
            <option value='mayor'>Menor</option>
        </select>
        </div>

        <div className={Estilos.divFuente}>  
        <select className={Estilos.select} name='fuente'>
            <option>Elige fuente</option>
            <option>Todos</option>
            <option>Existentes</option>
            <option>Creados</option>
        </select>
        </div>

        <div className={Estilos.divTypes}>
        <select className={Estilos.select} name='tipos' onChange={(e) => handleTypes(e)}>
            <option>Tipos</option>
            <option value='all'>Todos</option>
            {
                pokemonsTypes.map((e)=> {
                    return (
                        <option key={e.name} value={e.name}>{e.name}</option>
                        )
                    })
                }
        </select>
        </div>


    </div>
    </>
)

}