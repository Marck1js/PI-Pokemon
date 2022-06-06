import React from "react";
import Estilos from './Card.module.css';
import {useNavigate} from 'react-router-dom';
export default function Card ({name, image, types, id}){

    // Derivacion a la ruta de detalle de un pokemon en particular 

 
    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(`/detail/${id}`);
    }



    return (

        <div className={Estilos.contenedor} onClick={()=> handleDetail()}>
            <div className={Estilos.imagen}>
            <img src={image} alt='imagen' className={Estilos.img} />
            </div>
            <h2 className={Estilos.nombre}>{name}</h2>
            <h3 className={Estilos.tipos}>{types.map((e,index)=> <div key={index}><i>{e}</i></div>)}</h3>
         </div>
            


    )

}