import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { apiGetPokemons } from '../redux/actions';
import Card from './Card';
import Estilos from './Cards.module.css';
import Info from './loading/Info';



export default function Cards () {
 
  const dispatch = useDispatch();
  const datos = useSelector(state => state.allPokemons);
 

  console.log(datos);
  useEffect(()=> {
    if(datos.length === 0){
      dispatch(apiGetPokemons());
    }


  },[])


  return ( 
    <div>
           
     
      <div className={Estilos.contenedor}>

      


       {(datos.length !== 0)? datos?.map(e => {
         return ( <Card key={e.name} name={e.name} image={e.image} types={e.types} id={e.id}/>)
         
        }) : <Info/>}
      </div>
     
    
    </div>
  )

}