import React, { useState } from "react";
import Estilos from './SearchBar.module.css';
import Search from '../../img/search.jsx';
import { useDispatch } from 'react-redux';
import { seachByName } from "../../redux/actions";
export default function SearchBar() {

    // HOOKS
    const [state, setState] = useState('')
    const dispatch = useDispatch();

    // HOOKS --!

    const handleClick = (e) => {
        e.preventDefault();
        if (state === '') {
            alert('Por favor escriba algo')
        } else {
            dispatch(seachByName(state));

            setState('')
        }
    }

    const handleSearch = (e) => {
        setState(e.target.value.toLowerCase())
    }





    return (

            <form  onSubmit={(e) => handleClick(e)} className={Estilos.buscar}>
                <div className={Estilos.input} onSubmit={(e) => handleClick(e)}>
                    <input type='text' value={state} onChange={(e) => handleSearch(e)} placeholder='busca pokemon'/>
                </div>

                <button  type="submit" className={Estilos.btn}>
                    <Search />
                </button>
            </form>
        )
}