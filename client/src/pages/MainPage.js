import React, {useEffect, useState} from "react";
import NavBar from "../components/navBar/NavBar";
import Estilos from './MainPage.module.css';
import Info from '../components/loading/Info';
import {useDispatch, useSelector} from 'react-redux'
import { apiGetPokemons } from "../redux/actions";
import Card from "../components/Card";
import SearchBar from '../components/searchBar/SearchBar';
import Paginado from "./Paginado";

export default function MainPage ()  {

    const dispatch = useDispatch();
    const pokemons = useSelector((state)=> state.allPokemons);


    // PAGINADO

    const [paginaActual, setPaginaActual] = useState(1);
    const [pokemonesPorPagina, setPokemonesPorPagina] = useState(12);
    const indiceUltimoPokemon = paginaActual * pokemonesPorPagina;
    const indicePrimerPokemon = indiceUltimoPokemon - pokemonesPorPagina;
    const pokemonesActual = pokemons.slice(indicePrimerPokemon, indiceUltimoPokemon);

    const paginado = (pageNumber) => {
        setPaginaActual(pageNumber)
    }

    // PAGINADO --!

    useEffect(()=>{
        if(pokemons.length === 0) {
            dispatch(apiGetPokemons());
        }
    },[]);


    return (    
        <>
        {pokemons.length === 0 ? <Info/> 
        : 
        <div className={Estilos.contenedor}>
           
            <NavBar/>
           
           <div className={Estilos.searchPage}>
            <SearchBar/>
            <Paginado pokemonesPorPagina={pokemonesPorPagina} pokemons={pokemons.length} paginado={paginado}/>
           </div>

         
          
            <div className={Estilos.cards}>
            {
            pokemons === 'x' ? <div className={Estilos.notfound}><p>no</p><p>hay</p><p>pokemones</p><p>con</p><p>esa</p><p>caracteristica</p><p>;(</p></div>:   pokemonesActual.map(e=> {
                   return ( <Card key={e.name} name={e.name} image={e.image} types={e.types} id={e.id}/>)
                }) 
            } 
         </div>
            
            


            
        </div>}
        </>
    )
}