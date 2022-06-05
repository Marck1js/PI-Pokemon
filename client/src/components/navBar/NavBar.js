import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom' 
import { getIdPokemon } from "../../redux/actions"; 
export default function NavBar() {

    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getIdPokemon(search))
        setSearch('');
        console.log(`Has buscado ${search}`)
    }



return (
    
    <nav>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input value={search} placeholder='Busca un pokemon' onChange={(e)=> handleSearch(e)}/>
            <button>Buscar</button>
        </form>


        <div>
            <Link to='/create'>
            <button>Crea un Pokemon</button>
            </Link>
        </div>
    </nav>

)

}