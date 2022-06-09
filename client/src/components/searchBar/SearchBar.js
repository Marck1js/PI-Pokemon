import React, {useState} from "react";
import Estilos from './SearchBar.module.css';
import lupa from '../../img/search.svg';
import {useDispatch} from 'react-redux';
import { seachByName } from "../../redux/actions";
export default function SearchBar () {

    // HOOKS
    const [state, setState] = useState('')
    const dispatch = useDispatch();

    // HOOKS --!

    const handleClick = () =>{
        if(state === ''){
           console.log('Por favor escriba algo')
        }else {
           dispatch(seachByName(state));

           setState('')
        }          
    }

    const handleSearch = (e) => {
        setState(e.target.value.toLowerCase())
    }





    return (
    

        <div className={Estilos.body}>

       <div className={Estilos.buscar}>
           <input type='text' value={state} onChange={(e)=> handleSearch(e)}/>

          <div onClick={()=>handleClick()} className={Estilos.btn}>
            <img src={lupa} alt='lupa'/>

        </div>
        </div>
        </div>
       
    )

}