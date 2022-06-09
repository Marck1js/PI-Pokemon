import React from "react";
import Estilos from './Paginado.module.css';
export default function Paginado ({pokemonesPorPagina, pokemons, paginado}){
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(pokemons/pokemonesPorPagina); i++){
        pageNumber.push(i)
    }

    return (
        <div className={Estilos.nav}>

        <div className={Estilos.paginacion}>
                
                    {pageNumber &&
                    pageNumber.map((number) => (
                        <span key={number}>
                        <a href="#" onClick={()=> paginado(number)}>{number}</a>
                           </span>
                            ))}
                

            </div>
        </div>

    )



}