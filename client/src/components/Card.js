import React from "react";
import Estilos from './Card.module.css';
export default function Card ({name, image, types}){

    return (

        <div className={Estilos.contenedor}>
            <div className={Estilos.imagen}>
            <img src={image} alt='imagen' className={Estilos.img} />
            </div>
            <h2 className={Estilos.nombre}>{name}</h2>
            <h3 className={Estilos.tipos}>{types.map((e,index)=> <div key={index}><i>{e}</i></div>)}</h3>
         </div>
            


    )

}