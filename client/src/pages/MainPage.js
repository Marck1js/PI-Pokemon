import React, {useEffect} from "react";
import NavBar from "../components/navBar/NavBar";
import Estilos from './MainPage.module.css';
import Info from '../components/loading/Info';
import {useDispatch, useSelector} from 'react-redux'
import { apiGetPokemons } from "../redux/actions";
import Card from "../components/Card";
import SearchBar from '../components/searchBar/SearchBar'
export default function MainPage ()  {

    const dispatch = useDispatch();
    const pokemons = useSelector((state)=> state.allPokemons);

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
           
            <SearchBar/>
            

            <ul className={Estilos.cards}>
            {
            pokemons === 'x' ? <div className={Estilos.notfound}><h1>no</h1><h1>hay</h1><h1>pokemones</h1><h1>con</h1><h1>esa</h1><h1>caracteristica</h1><h1>;(</h1></div>:   pokemons.map(e=> {
                   return ( <Card key={e.name} name={e.name} image={e.image} types={e.types} id={e.id}/>)
                }) 
            } 
            </ul>
            
        </div>}
        </>
    )
}