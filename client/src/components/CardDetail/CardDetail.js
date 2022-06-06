import React from "react";


export default  function CardDetail ({name,image,type,id,life,strength,defense,speed,height,weight}) {
   
   return (
       <div>
           <h1>{name}</h1>
           <img src={image} width='100px' height='100px' alt="pokemon"/>
           {type.map(e => <h1 key={e}>{e}</h1>)}
           <h1>{id}</h1>
           <h1>{life}</h1>
           <h1>{strength}</h1>
           <h1>{defense}</h1>
           <h1>{speed}</h1>
           <h1>{height}</h1>
           <h1>{weight}</h1>
       </div>
   ) 

}