import React, {useEffect, useState} from "react";
import Estilos from './CreatingPage.module.css';
import { useValidate } from "../components/validaciones/useValidate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiGetTypes, postPokemon } from "../redux/actions";

const initialForm = {
    name:'',
    life: '',
    strength:'',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    image: '',
    types: []

}

const validateFunction = (form) => {
    let errors = {};
    let onlynumbers = /^[0-9]+$/

    if(form.image.length === 0){
        errors.image = 'Por favor ingrese una url valida'
    }

    if(!form.name.trim()){
        errors.name = 'El campo "Nombre" es obligatorio'
    }
    if(!onlynumbers.test(form.life)){
        errors.life = 'VIDA => SOLO NUMEROS'
    }
    if(!onlynumbers.test(form.strength)){
        errors.strength = 'FUERZA => SOLO NUMEROS'
    }
    if(!onlynumbers.test(form.defense)){
        errors.defense = 'DEFENSA => SOLO NUMEROS'
    }
    if(!onlynumbers.test(form.speed)){
        errors.speed = 'VELOCIDAD => SOLO NUMEROS'
    }
    if(!onlynumbers.test(form.height)){
        errors.height = 'ALTURA => SOLO NUMEROS'
    }
    if(!onlynumbers.test(form.weight)){
        errors.weight = 'PESO => SOLO NUMEROS'
    }
    if(form.types.length === 0){
        errors.types = 'ELIJA AUNQUE SE UN SOLO TIPO'
    }


    return errors;
};

let styles = {
    fontWeight:"bold",
    color: "#dc3545"
}
let styles2 = {
    fontWeight:"bold",
    color: "black"
}


function CreatingPage () {

    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const types = useSelector((state)=> state.types);

    const [addDelete, setAddDelete] = useState('');
    
    const {form,setForm,errors,handleBlur,handleChange} = useValidate(initialForm,validateFunction)

    useEffect(()=> {
        if(types.length === 0){
            dispatch(apiGetTypes());
        }
    },[])
// HOOKS --!

    // ONCLICK  
    const back = () => {
        navigate('/home');
    }

// ONCLICK --!    

    // MANEJADORES
    const handleChangeType = (e) => {
        if(e.target.value === 'Tipos'){
            setAddDelete('');
        } else {
            setAddDelete(e.target.value);
        }
    }

    const handleAddTypes = (e) => {
        e.preventDefault();
        if(form.types.length === 3){
            alert('Ya no puede agregar mas tipos');
            setAddDelete('');
        }else if(form.types.includes(addDelete)){
            alert('Ese tipo ya ha sido agregado anteriormente');
            setAddDelete('');
        } else if(addDelete !== ''){
            setForm({...form, types: [...form.types, addDelete]});
            setAddDelete('')
        } else {
            alert('Elija un tipo para añadir');
        }
    } 


    const handleDeleteTypes = (e) => {
        e.preventDefault();
        
        if(form.types.length === 0){
            alert('No hay ningun tipo para que sea eliminado')
        }else if(!form.types.includes(addDelete)){
            alert('No se puede eliminar porque no esta agregado')
        } else if(addDelete !== ''){
            setForm({...form, types: form.types.filter(f=> f !== addDelete)});
            setAddDelete('')
        }  
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(errors).length === 0){
            dispatch(postPokemon(form));
            setForm({
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
        let ask = window.confirm("Pokemon Creado, Quiere ir a la pagina principal, o va a crear otro pokemon");
        if(ask === false){
            navigate('/home')
        }else {
            console.log('creating...')
        }

        }else {
            alert('No se puede neviar los datos, hay errores')
        }
    }



// MANEJADORES --!


    return (
        <div className={Estilos.contenedor}>

            <div className={Estilos.formulario}>
            <form onSubmit={(e)=> handleSubmit(e)}>
      <label htmlFor="name">Nombre: </label>
      <input
        type="text"
        name="name"
        placeholder="Escribe tu nombre"
        required
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.name}
      />
      <br/>
    
       
      <label htmlFor="life">Vida: </label>
      <input
        type="text"
        name="life"
        placeholder="Escribe vida"
        required
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.life}
      />
        <br/>
      
       
      <label htmlFor="strength">Fuerza: </label>
      <input
        type="text"
        name="strength"
        placeholder="Escribe tu fuerza"
        required
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.strength}
      />
        <br/>
      
      
      <label htmlFor="defense">Defensa: </label>
      <input
        type="text"
        name="defense"
        placeholder="Escribe tu defensa"
        required
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.defense}
      />
        <br/>
      
      
      <label htmlFor="speed">Velocidad: </label>
      <input
        type="text"
        name="speed"
        placeholder="Escribe tu velocidad"
        required
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.speed}
      />
        <br/>
      
      
      <label htmlFor="height">Altura: </label>
      <input
        type="text"
        name="height"
        placeholder="Escribe tu altura"
        required 
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.height}
      />
        <br/>
     
      
      <label htmlFor="weight">Peso: </label>
      <input
        type="text"
        name="weight"
        placeholder="Escribe tu peso"
        required
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.weight}
      />
        <br/>
       
     

      <label htmlFor="image">Imagen: </label>
      <input
        type="text"
        name="image"
        placeholder="Escribe tu imagen"
        required
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.image}
      />
        <br/>
      
     
      <select className={Estilos.select} onChange={(e)=> handleChangeType(e)}>
          <option value='Tipos'>Tipos</option>
            {
                types.map((e)=> <option key={e.name} value={e.name}>{e.name}</option>)
            }
      </select>
      <br/>
     
      

      <button className={Estilos.button} onClick={(e)=> handleAddTypes(e)}>añadir</button>

      <button className={Estilos.button} onClick={(e)=> handleDeleteTypes(e)}>eliminar</button>

       
      <button className={Estilos.button}> CREAR POKEMON !</button>
            </form>

            </div>

        <div className={Estilos.goHome}>
            <button className={Estilos.btn} onClick={back}>BACK</button>
        </div>

        

        <div className={Estilos.showTypes}>
            <h2 className={Estilos.add}>Tipos añadidos</h2>

            {
            form.types.length === 0 ? null : form.types.map((e)=> {
                return (
                    <div className={Estilos.types} key={e}>{e}</div>
                )
            })
            }

        </div>
            { Object.keys(errors).length === 0 ? null :
            <div className={Estilos.showErrors}>
            {errors.name && <p className={Estilos.p} style={styles}>{errors.name}</p>}
            {errors.life && <p  className={Estilos.p} style={styles}>{errors.life}</p>}
            {errors.strength && <p  className={Estilos.p} style={styles}>{errors.strength}</p>}
            {errors.defense && <p className={Estilos.p}  style={styles}>{errors.defense}</p>}
            {errors.speed && <p  className={Estilos.p} style={styles}>{errors.speed}</p>}
            {errors.height && <p  className={Estilos.p} style={styles}>{errors.height}</p>}
            {errors.weight && <p  className={Estilos.p} style={styles}>{errors.weight}</p>}
            {errors.image && <p  className={Estilos.p} style={styles}>{errors.image}</p>}
            {errors.types && <p  className={Estilos.p} style={styles}>{errors.types}</p>}
        </div>
}


</div>
    )
}

export default CreatingPage;