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
                <p className={Estilos.letra} onClick={goMenu}>PRESS START</p>
        </div>
    )
}