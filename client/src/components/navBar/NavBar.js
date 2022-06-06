import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom' 
import { getIdPokemon, apiGetTypes, orderByName, orderByStrength } from "../../redux/actions"; 
import Estilos from './NavBar.module.css';

export default function NavBar() {
    
    const dispatch = useDispatch();
    
    const pokemonsTypes = useSelector((state) => state.types);

   useEffect(()=>{
       if(pokemonsTypes.length === 0){
           dispatch(apiGetTypes())
        }
        else {
            console.log('Que onda');
        }


   },[])

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value)
    };


    const handleName = (e) =>{
        e.preventDefault();
        dispatch(orderByName(e.target.value));
    }   


    const handleStrength = (e) => {
        e.preventDefault();
        dispatch(orderByStrength(e.target.value))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getIdPokemon(search))
        setSearch('');
        console.log(`Has buscado ${search}`)
    }



return (
    <>
    <div className={Estilos.contenedor}>
        <div className={Estilos.busqueda}>
        <form onSubmit={(e)=> handleSubmit(e)} className={Estilos.form}>
            <input className={Estilos.input} value={search} placeholder='Busca un pokemon' onChange={(e)=> handleSearch(e)}/>
            <button className={Estilos.btnSearch}>Buscar</button>
        </form>
        </div>

        <div className={Estilos.div}>
            <Link to='/create'>
            <button className={Estilos.btnCreate}>Crea un Pokemon</button>
            </Link>
        </div>
        <span className={Estilos.span}>Welcome to my PokeApi</span>

        <select className={Estilos.filtro} name='select' onChange={(e)=> handleName(e)}>
            <option value='all'>Defecto</option>
            <option value='asc'>A-Z</option>
            <option value='des'>Z-A</option>
        </select>

        <select className={Estilos.fuerza} name='select' onChange={(e)=> handleStrength(e)}>
            <option>Ordenar por Fuerza</option>
            <option value='menor'>Mayor</option>
            <option value='mayor'>Menor</option>
        </select>

        <select className={Estilos.fuente} name='select'>
            <option>Elige fuente</option>
            <option>Todos</option>
            <option>Existentes</option>
            <option>Creados</option>
        </select>

        <select className={Estilos.types}>
            <option>Tipos</option>
            {
        pokemonsTypes.map((e)=> {
                          return (
                                <option key={e.name} value={e.name}>{e.name}</option>
                                )
                        })
                    }
        </select>

    </div>
    </>
)

}