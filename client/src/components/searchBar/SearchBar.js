import React from "react";
import Estilos from './SearchBar.module.css';
import lupa from '../../img/search.svg';
export default function SearchBar () {

    return (
    

        <div className={Estilos.body}>

       <div className={Estilos.buscar}>
           <input type='text' required/>

          <div className={Estilos.btn}>
            <i className={Estilos.i}><img src={lupa}/></i>

        </div>
        </div>
        </div>
       
    )

}