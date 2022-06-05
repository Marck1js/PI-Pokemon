import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {apiDetailPokemon} from '../redux/actions';

export default function DetailPage () {

    const dispatch = useDispatch();
    const detail = useSelector((state)=> state.detailPokemon)
    const [detalle, setDetalle] = useState({});

    useEffect(()=>{
        dispatch(apiDetailPokemon(1));
        
    },[]);
 
    useEffect(()=>{
        console.log(detail)
    },[detail]);




    return (

        <div>
            Welcome to detail page
        </div>
    )

}