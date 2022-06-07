import React from "react";
import Estilos from './CardDetail.module.css';

export default  function CardDetail ({name,image,type,id,life,strength,defense,speed,height,weight}) {
   
   return (
       <div  className={Estilos.contenedor}>
           <h1 className={Estilos.name}>{name}</h1>
          <div className={Estilos.divImagen}><img className={Estilos.image} src={image} width='100px' height='100px' alt="pokemon"/></div> 
           <div className={Estilos.divType}>{type.map(e => <h1 className={Estilos.type} key={e}>Tipo: {e}</h1>)}</div>
           <h1 className={Estilos.id}>id: {id}</h1>
           <div className={Estilos.stats}><h1 className={Estilos.life}>vida: {life}</h1>
           <h1 className={Estilos.strength}>fuerza: {strength}</h1>
           <h1 className={Estilos.defense}>defensa: {defense}</h1>
           <h1 className={Estilos.speed}>velocidad: {speed}</h1>
           <h1 className={Estilos.height}>altura: {height}</h1>
           <h1 className={Estilos.weight}>peso: {weight}</h1></div>
       </div>
   ) 

}