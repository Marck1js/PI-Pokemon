import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link, useParams } from "react-router-dom";
import {apiDetailPokemon, setDetail} from '../redux/actions';
import Loading from "../components/loading/Loading";
import CardDetail from "../components/CardDetail/CardDetail";

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

        <div>
            Welcome to detail page
           <Link to='/home'><button>Back</button></Link>

        {
           detalle.length !== 0 ? <CardDetail name={detalle.name} image={detalle.image} type={detalle.type} id={detalle.id} life={detalle.life} strength={detalle.strength} defense={detalle.defense} speed={detalle.speed} height={detalle.height} weight={detalle.weight}/> : <Loading/>
        }
             
        </div>
    )

}

