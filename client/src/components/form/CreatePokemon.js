import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { apiGetTypes } from "../../redux/actions";
import { Link } from "react-router-dom";
export default function CreatePokemon () {




    const dispatch = useDispatch();

    const pokemonsTypes = useSelector((state) => state.types);

useEffect(()=>{
    dispatch(apiGetTypes());
    console.log(datos);
    console.log(pokemonsTypes);
},[])


    const [datos,setDatos]= useState({
      name: '',
      life: '',
      strength: '',
      defense:'',
      speed:'',
      heigth:'',
      weight:'',
      types:[]

    });
    

    const handleName = (e) => {
        setDatos({...datos,name: e.target.value})
    }   
    const handleLife = (e) => {
        setDatos({...datos,life: e.target.value})
    }  
    const handleStrength = (e) => {
        setDatos({...datos,strength: e.target.value})
    }   
    const handleDefense = (e) => {
        setDatos({...datos,defense: e.target.value})
     }
    const handleSpeed = (e) => {
        setDatos({...datos,speed: e.target.value})
    }   
    const handleHeigth = (e) => {
        setDatos({...datos,heigth: e.target.value})
    }  
    const handleWeight = (e) => {
        setDatos({...datos,weight: e.target.value})
    }   

    const handleSendData = (e) =>{
        e.preventDefault();
        Validaciones(datos)
    } 

    const addType = () => {

    }


    return (
        <>
        <div>
            <form onSubmit={(e) => handleSendData(e)}>
                <label htmlFor="name">Nombre:</label>
                <input type='text' id='name' value={datos.name} onChange={(e)=> handleName(e)}/>
                <br/>
                <label htmlFor="life">Vida:</label>
                <input type='text' id='life' value={datos.life} onChange={(e)=> handleLife(e)}/>
                 <br/>
                <label htmlFor="strength">Fuerza:</label>
                <input type='text' id='strength' value={datos.strength} onChange={(e)=> handleStrength(e)}/>
                <br/>
                <label htmlFor="defense">Defensa:</label>
                <input type='text' id='defense' value={datos.defense} onChange={(e)=> handleDefense(e)}/>
                <br/>
                <label htmlFor="speed">Velocidad:</label>
                <input type='text' id='speed' value={datos.speed} onChange={(e)=> handleSpeed(e)}/>
                <br/>
                <label htmlFor="heigth">Altura:</label>
                <input type='text' id='heigth' value={datos.heigth} onChange={(e)=> handleHeigth(e)}/>
                <br/>
                <label htmlFor="weight">Peso:</label>
                <input type='text' id='weight' value={datos.weight} onChange={(e)=> handleWeight(e)}/>
                <br/>
                <label htmlFor="selector">Tipos:</label>
                <select id="selector" name="select">
                    <option>Seleccionar Tipos</option>
                    {
                        pokemonsTypes.map((e,index)=> {
                            return (

                                <option key={e.name} value={e.name}>{e.name}</option>
                                )
                        })
                    }
                </select>
                <input type='button' defaultValue={"Añadir"} onClick={addType}/>
                <input type='button' defaultValue={"Eliminar"}/>
                <button>CREAR POKEMON</button>


            </form>
        </div>
        <div>
            <Link to='/home'><button>Back</button></Link>
        </div>
        </>
    )
}


function Validaciones (datos) {
    console.log(datos)

}
