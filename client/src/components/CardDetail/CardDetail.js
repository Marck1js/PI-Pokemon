import React from "react";
import Estilos from './CardDetail.module.css';

export default function CardDetail({ name, image, type, id, life, strength, defense, speed, height, weight }) {

    return (
        <div className={Estilos.contenedor}>

            <div className={Estilos.start}>
                <p className={Estilos.name}>{name}</p>
            </div>


            <div className={Estilos.middle}>



                <div className={Estilos.divImagen}>
                    <img className={Estilos.image} src={image} alt="pokemon" />
                </div>

                <div className={Estilos.divType}>
                    {type.map(e => <p className={Estilos.type} key={e}>Tipo: {e}</p>)}
                </div>

                <div className={Estilos.stats}>
                    <p className={Estilos.life}>vida: {life}</p>
                    <p className={Estilos.strength}>fuerza: {strength}</p>
                    <p className={Estilos.defense}>defensa: {defense}</p>
                    <p className={Estilos.speed}>velocidad: {speed}</p>
                    <p className={Estilos.height}>altura: {height}</p>
                    <p className={Estilos.weight}>peso: {weight}</p>
                </div>
            </div>

        </div>
    )

}