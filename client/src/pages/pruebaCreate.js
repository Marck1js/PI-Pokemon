import React from "react";
import { useValidate } from "../components/validaciones/useValidate";

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
};
const validateFunction = (form) => {
    let errors = {};
    let onlynumbers = /^[0-9]+$/

    if(!form.name.trim()){
        errors.name = 'El campo "Nombre" es requerido'
    }
    if(!onlynumbers.test(form.life)){
        errors.life = 'Solo Se Admite numeros'
    }
    if(!onlynumbers.test(form.strength)){
        errors.strength = 'Solo Se Admite numeros'
    }
    if(!onlynumbers.test(form.defense)){
        errors.defense = 'Solo Se Admite numeros'
    }
    if(!onlynumbers.test(form.speed)){
        errors.speed = 'Solo Se Admite numeros'
    }
    if(!onlynumbers.test(form.height)){
        errors.height = 'Solo Se Admite numeros'
    }
    if(!onlynumbers.test(form.weight)){
        errors.weight = 'Solo Se Admite numeros'
    }
    if(form.types.length === 0){
        errors.types = 'Elige Minimamente un Tipo'
    }


    return errors;
};

let styles = {
    fontWeight:"bold",
    color: "#dc3545"
}


export default function Prueba() {
  const {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useValidate(initialForm, validateFunction);

  return (
    <form onSubmit={handleSubmit}>
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
      {errors.name && <p style={styles}>{errors.name}</p>}
      <hr />
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
       {errors.life && <p style={styles}>{errors.life}</p>}
      <hr />
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
       {errors.strength && <p style={styles}>{errors.strength}</p>}
      <hr />
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
       {errors.defense && <p style={styles}>{errors.defense}</p>}
      <hr />
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
       {errors.speed && <p style={styles}>{errors.speed}</p>}
      <hr />
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
       {errors.height && <p style={styles}>{errors.height}</p>}
      <hr />
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
       {errors.weight && <p style={styles}>{errors.weight}</p>}
      <hr />
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
       {errors.image && <p style={styles}>{errors.image}</p>}
      <hr />
    
      <select>
        <option>tipos</option>
        <option>aire</option>
        <option>fuego</option>
        <option>tierra</option>
        <option>agua</option>
      </select>

      <button>añadir</button>
      <button>eliminar</button>
      <input type='submit' value='Enviar'/>
    </form>
  );
}
