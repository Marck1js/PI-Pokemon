import React from "react";
import Estilos from './StartPage.module.css';
import {useNavigate} from 'react-router-dom';


export default function StartPage () {


    const navegator = useNavigate();

    const goMenu = () => {
        navegator('/home')
   }
   
    return (
        <div className={Estilos.start}>
                <h1 className={Estilos.letra} onClick={goMenu}>PRESS START</h1>


        </div>
    )
}