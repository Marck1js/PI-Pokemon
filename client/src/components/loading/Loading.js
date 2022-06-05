import React from 'react';
import Estilos from './Loading.module.css';
export default function Loading () {

    return (

        <div className={Estilos.background}>

        <div className={Estilos.contenedor}>
            <div className={Estilos.spinner}></div>
            <h3 className={Estilos.text}>Please Wait</h3>
        </div>
        </div>
    )


}