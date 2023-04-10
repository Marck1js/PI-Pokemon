import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { apiGetTypes, orderByName, orderByStrength, filterByType, filterByOrigin } from "../../redux/actions";
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

    const handleSource = (e) => {
        e.preventDefault();
        if(e.target.value === 'choose'){
            console.log('a')
        } else {
            dispatch(filterByOrigin(e.target.value));
        }
    }



return (
    <nav className={Estilos.nav}>
    <div className={Estilos.contenedor}>

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

        <div className={Estilos.div}>
            <Link to='/home/create'>
            <button className={Estilos.btnCreate}>Crea un Pokemon</button>
            </Link>
        </div>


        <div className={Estilos.divFuente}>
        <select className={Estilos.select} name='fuente' onChange={(e)=> handleSource(e)}>
            <option value='choose'>Elige fuente</option>
            <option value='all'>Todos</option>
            <option value='api'>Existentes</option>
            <option value='db'>Creados</option>
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
    </nav>
)

}