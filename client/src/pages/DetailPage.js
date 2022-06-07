import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link, useParams } from "react-router-dom";
import {apiDetailPokemon, setDetail} from '../redux/actions';
import Loading from "../components/loading/Info";
import CardDetail from "../components/CardDetail/CardDetail";
import Estilos from './DetailPage.module.css';

export default function DetailPage () {

    const params = useParams();
    const dispatch = useDispatch();
    const detalle = useSelector((state)=> state.detailPokemon);

    useEffect(()=> {
        dispatch(apiDetailPokemon(params.id))
         return () => {
        dispatch(setDetail());  
         }
    },[])
  

    return (
         <>
        {
            detalle.length === 0 ? <Loading/> 
            : 
        <div className={Estilos.contenedor}>
         
         <div className={Estilos.cont}>
             <CardDetail name={detalle.name} image={detalle.image} type={detalle.type} id={detalle.id} life={detalle.life} strength={detalle.strength} defense={detalle.defense} speed={detalle.speed} height={detalle.height} weight={detalle.weight}/>
             <div className={Estilos.btn}><Link to='/home'><button className={Estilos.boton}>BACK</button></Link></div>
         </div>


        </div>
         
}
        </>
    )

}

