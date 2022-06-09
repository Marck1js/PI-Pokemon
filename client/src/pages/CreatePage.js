import React, {useEffect, useState} from "react";
import Estilos from './CreatePage.module.css';
import {useNavigate} from 'react-router-dom'
import {apiGetTypes, postPokemon} from '../redux/actions/index';
import {useDispatch, useSelector} from 'react-redux';
function CreatePage () {

    //HOOKS
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const types = useSelector((state)=> state.types);


    const [validations, setValidations] = useState({
        name:'',
        life: '',
        strength:'',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        image: '',
        types: ''
    });


    const [addDelete, setAddDelete] = useState('');
    
    const [state, setState] = useState({
        name:'',
        life: '',
        strength:'',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        image: '',
        types: []

    });



useEffect(()=>{
    if(types.length === 0) {
        dispatch(apiGetTypes());
    }
},[])

    //HOOKS--!

    // ONCLICK 

     const back = () => {
         navigate('/home');
     }

    // ONCLICK --!

    //MANEJADORES

    const handleName = (e) => {
        setState({...state,name : e.target.value});
     
    }
    const handleLife = (e) => {
        setState({...state,life : e.target.value});
    }
    const handleStrength = (e) => {
        setState({...state,strength : e.target.value});
    }
    const handleDefense = (e) => {
        setState({...state,defense : e.target.value});
    }
     const handleSpeed = (e) => {
        setState({...state,speed : e.target.value});
    }
    const handleHeight = (e) => {
        setState({...state,height : e.target.value});
    }
    const handleWeight = (e) => {
        setState({...state,weight : e.target.value});
    }
    const handleImage = (e) => {
        setState({...state,image : e.target.value});
    }
    const handleAddTypes = (e) => {
        e.preventDefault();
        if(state.types.length === 3){
            alert('Ya no puede agregar mas tipos');
            setAddDelete('');
        }else if(state.types.includes(addDelete)){
            alert('Ese tipo ya ha sido agregado anteriormente');
            setAddDelete('');
        } else if(addDelete !== ''){
            setState({...state, types: [...state.types, addDelete]});
            setAddDelete('')
        } else {
            alert('Elija un tipo para añadir');
        }
    } 
    const handleDeleteTypes = (e) => {
        e.preventDefault();
        
        if(state.types.length === 0){
            alert('No hay ningun tipo para que sea eliminado')
        }else if(!state.types.includes(addDelete)){
            alert('No se puede eliminar porque no esta agregado')
        } else if(addDelete !== ''){
            setState({...state, types: [...state.types], types: state.types.filter(f=> f !== addDelete)});
            setAddDelete('')
        }  
    } 
    const handleChangeType = (e) => {
        if(e.target.value === 'Tipos'){
            setAddDelete('');
        } else {
            setAddDelete(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postPokemon(state));
        setState({
            name:'',
            life: '',
            strength:'',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            image: '',
            types: []
    
        })
        setAddDelete('');
        let ask = window.confirm("Pokemon creado, ¿Desea Crear Otro Pokemon?");
       if(ask === false){
           navigate('/home')
       }else {
           console.log('creating ...')
       }
    }


    //MANEJADORES--!



    return (
      
        <div className={Estilos.contenedor}>

            <div className={Estilos.formulario}>

                <form onSubmit={(e)=> handleSubmit(e)}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input id="nombre" type='text' placeholder="Escribe Nombre" value={state.name} onChange={(e)=> handleName(e)}/>
                    <br/>
                    <label htmlFor="vida">Vida:</label>
                    <input id="vida" type='text' placeholder="Escribe Vida" value={state.life} onChange={(e)=> handleLife(e)}/>
                    <br/>
                    <label htmlFor="fuerza">Fuerza:</label>
                    <input id="fuerza" type='text' placeholder="Escribe Fuerza"  value={state.strength} onChange={(e)=> handleStrength(e)}/>
                    <br/>
                    <label htmlFor="defensa">Defensa:</label>
                    <input id="defensa" type='text' placeholder="Escribe Defensa"  value={state.defense} onChange={(e)=> handleDefense(e)}/>
                    <br/>
                    <label htmlFor="velocidad">Velocidad:</label>
                    <input id="velocidad" type='text' placeholder="Escribe Velocidad"  value={state.speed} onChange={(e)=> handleSpeed(e)}/>
                    <br/>
                    <label htmlFor="altura">Altura:</label>
                    <input id="altura" type='text' placeholder="Escribe Altura"  value={state.height} onChange={(e)=> handleHeight(e)}/>
                    <br/>
                    <label htmlFor="peso">Peso:</label>
                    <input id="peso" type='text' placeholder="Escribe Peso"  value={state.weight} onChange={(e)=> handleWeight(e)}/>
                    <br/>
                    <label htmlFor="imagen">Imagen:</label>
                    <input id="imagen" type='text' placeholder="Escribe link de Imagen"  value={state.image} onChange={(e)=> handleImage(e)}/>
                    <br/>
                    <select className={Estilos.select} onChange={(e)=> handleChangeType(e)}>
                        <option value='Tipos'>Tipos</option>
                        {
                            types.map((e)=> <option key={e.name} value={e.name}>{e.name}</option>)
                        }
                    </select>
                    <br/>
                    <button className={Estilos.button} onClick={(e) => handleAddTypes(e) }>Añadir</button>
                    <button className={Estilos.button} onClick={(e) => handleDeleteTypes(e)}>Eliminar</button>
                  
                    <br/>
                    <button className={Estilos.button} >CREAR POKEMON !</button>
                    
                </form>
                </div>

                <div className={Estilos.goHome}>
                <button className={Estilos.btn} onClick={back}>BACK</button>
                </div>

                <br/>



            <div className={Estilos.showTypes}>
                <h2 className={Estilos.add}>Tipos añadidos</h2>
                
                {
                    state.types.length === 0 ? null : state.types.map((e)=> {
                        return (
                            <div className={Estilos.types} key={e}>{e}</div>
                        )
                    })

                }

            </div>



          
        






        </div>

    )

}

export default CreatePage;

