import React from "react";
import Cards from "../components/Cards";
import NavBar from "../components/navBar/NavBar";
import Estilos from './MainPage.module.css';
export default function MainPage ()  {

    return (
        <div className={Estilos.contenedor}>
            <div className={Estilos.componentes}>

           <NavBar/>
            <Cards/>
            </div>
        </div>
    )
}