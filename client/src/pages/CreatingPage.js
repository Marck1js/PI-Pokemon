import React, { useEffect, useState } from "react";
import Estilos from './CreatingPage.module.css';
import { useValidate } from "../components/validaciones/useValidate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiGetTypes, postPokemon } from "../redux/actions";

const initialForm = {
    name: '',
    life: '',
    strength: '',
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

    if (form.image.length === 0) {
        errors.image = 'Por favor ingrese una url valida'
    }

    if (!form.name.trim()) {
        errors.name = 'Solo Cadena de Texto'
    }
    if (!onlynumbers.test(form.life)) {
        errors.life = 'Solo numeros'
    }
    if (!onlynumbers.test(form.strength)) {
        errors.strength = 'Solo numeros'
    }
    if (!onlynumbers.test(form.defense)) {
        errors.defense = 'Solo numeros'
    }
    if (!onlynumbers.test(form.speed)) {
        errors.speed = 'Solo numeros'
    }
    if (!onlynumbers.test(form.height)) {
        errors.height = 'Solo numeros'
    }
    if (!onlynumbers.test(form.weight)) {
        errors.weight = 'Solo numeros'
    }
    if (form.types.length === 0) {
        errors.types = 'Elija aunque sea un tipo'
    }


    return errors;
};

let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}
let styles2 = {
    fontWeight: "bold",
    color: "black"
}


function CreatingPage() {

    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const types = useSelector((state) => state.types);

    const [addDelete, setAddDelete] = useState('');

    const { form, setForm, errors, handleBlur, handleChange } = useValidate(initialForm, validateFunction)

    useEffect(() => {
        if (types.length === 0) {
            dispatch(apiGetTypes());
        }
    }, [])
    // HOOKS --!

    // ONCLICK  
    const back = () => {
        navigate('/home');
    }

    // ONCLICK --!    

    // MANEJADORES
    const handleChangeType = (e) => {
        if (e.target.value === 'Tipos') {
            setAddDelete('');
        } else {
            setAddDelete(e.target.value);
        }
    }

    const handleAddTypes = (e) => {
        e.preventDefault();
        if (form.types.length === 3) {
            alert('Ya no puede agregar mas tipos');
            setAddDelete('');
        } else if (form.types.includes(addDelete)) {
            alert('Ese tipo ya ha sido agregado anteriormente');
            setAddDelete('');
        } else if (addDelete !== '') {
            setForm({ ...form, types: [...form.types, addDelete] });
            setAddDelete('')
        } else {
            alert('Elija un tipo para añadir');
        }
    }


    const handleDeleteTypes = (e) => {
        e.preventDefault();

        if (form.types.length === 0) {
            alert('No hay ningun tipo para que sea eliminado')
        } else if (!form.types.includes(addDelete)) {
            alert('No se puede eliminar porque no esta agregado')
        } else if (addDelete !== '') {
            setForm({ ...form, types: form.types.filter(f => f !== addDelete) });
            setAddDelete('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            dispatch(postPokemon(form));
            setForm({
                name: '',
                life: '',
                strength: '',
                defense: '',
                speed: '',
                height: '',
                weight: '',
                image: '',
                types: []
            })
            setAddDelete('');
            let ask = window.confirm("Pokemon Creado, Quiere ir a la pagina principal, o va a crear otro pokemon");
            if (ask === false) {
                navigate('/home')
            } else {
                console.log('creating...')
            }

        } else {
            alert('No se puede neviar los datos, hay errores')
        }
    }



    // MANEJADORES --!


    return (
        <div className={Estilos.contenedor}>

            <main>
                <form className={Estilos.formulario} onSubmit={(e) => handleSubmit(e)}>

                    <section className={Estilos.section}>
                        <div>
                            <div className={Estilos.llenar}>
                                <label htmlFor="name">Nombre: </label>
                                <div className={Estilos.input}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Escribe tu nombre"
                                        required
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={form.name}
                                    />
                                </div>
                            </div>
                            <div className={Estilos.errores}>
                            {errors.name && <i className={Estilos.p}>{errors.name}</i>}
                            </div>
                        </div>

                        <div>
                            <div className={Estilos.llenar}>
                                <label htmlFor="life">Vida: </label>
                                <div className={Estilos.input}>
                                    <input
                                        type="text"
                                        name="life"
                                        placeholder="Escribe vida"
                                        required
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={form.life}
                                    />
                                </div>
                            </div>
                            <div className={Estilos.errores}>  
                            {errors.life && <i className={Estilos.p} >{errors.life}</i>}
                            </div>
                        </div>


                        <div>
                            <div className={Estilos.llenar}>
                                <label htmlFor="strength">Fuerza: </label>
                                <div className={Estilos.input}>
                                    <input
                                        type="text"
                                        name="strength"
                                        placeholder="Escribe tu fuerza"
                                        required
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={form.strength}
                                    />
                                </div>
                            </div>
                            <div className={Estilos.errores}>
                            {errors.strength && <i className={Estilos.p}>{errors.strength}</i>}
                            </div>
                        </div>


                        <div>
                            <div className={Estilos.llenar}>
                                <label htmlFor="defense">Defensa: </label>
                                <div className={Estilos.input}>
                                    <input
                                        type="text"
                                        name="defense"
                                        placeholder="Escribe tu defensa"
                                        required
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={form.defense}
                                    />
                                </div>
                            </div>
                            <div className={Estilos.errores}>
                            {errors.defense && <i className={Estilos.p}>{errors.defense}</i>}
                            </div>
                        </div>


                        <div>
                            <div className={Estilos.llenar}>
                                <label htmlFor="speed">Velocidad: </label>
                                <div className={Estilos.input}>

                                    <input
                                        type="text"
                                        name="speed"
                                        placeholder="Escribe tu velocidad"
                                        required
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={form.speed}
                                    />
                                </div>
                            </div>
                            <div className={Estilos.errores}>
                            {errors.speed && <i className={Estilos.p}>{errors.speed}</i>}
                            </div>
                        </div>


                        <div>
                            <div className={Estilos.llenar}>
                                <label htmlFor="height">Altura: </label>
                                <div className={Estilos.input}>
                                    <input
                                        type="text"
                                        name="height"
                                        placeholder="Escribe tu altura"
                                        required
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={form.height}
                                    />
                                </div>
                            </div>
                            <div className={Estilos.errores}>
                            {errors.height && <i className={Estilos.p}>{errors.height}</i>}
                            </div>
                        </div>


                        <div>

                            <div className={Estilos.llenar}>
                                <label htmlFor="weight">Peso: </label>
                                <div className={Estilos.input}>

                                    <input
                                        type="text"
                                        name="weight"
                                        placeholder="Escribe tu peso"
                                        required
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={form.weight}
                                    />
                                </div>
                            </div>
                            <div className={Estilos.errores}>
                            {errors.weight && <i className={Estilos.p}>{errors.weight}</i>}
                            </div>
                        </div>

                        <div>
                            <div className={Estilos.llenar}>
                                <label htmlFor="image">Imagen: </label>
                                <div className={Estilos.input}>

                                    <input
                                        type="text"
                                        name="image"
                                        placeholder="Escribe tu imagen"
                                        required
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={form.image}
                                    />
                                </div>
                            </div>
                            <div className={Estilos.errores}>
                            {errors.image && <i className={Estilos.p}>{errors.image}</i>}
                            </div>
                        </div>
                    </section>


                    <section className={Estilos.fin}>

                        <div className={Estilos.mostrarType}>
                            <select className={Estilos.select} onChange={(e) => handleChangeType(e)}>
                                <option value='Tipos'>Tipos</option>
                                {
                                    types.map((e) => <option key={e.name} value={e.name}>{e.name}</option>)
                                }
                            </select>
                            <div className={Estilos.errores}>
                           {errors.types && <i className={Estilos.p}>{errors.types}</i>}
                            </div>

                        </div>




                        <div className={Estilos.actions}>
                            <button className={Estilos.button} onClick={(e) => handleAddTypes(e)}>añadir</button>

                            <button className={Estilos.button} onClick={(e) => handleDeleteTypes(e)}>eliminar</button>
                        </div>


                        <button className={Estilos.button}>CREAR POKEMON</button>
                    </section>

                </form>


                <div className={Estilos.typeAndBack}>

                    <div className={Estilos.showTypes}>
                        <p className={Estilos.add}>Tipos añadidos</p>

                        {
                            form.types.length === 0 ? null : form.types.map((e) => {
                                return (
                                    <div className={Estilos.types} key={e}>{e}</div>
                                )
                            })
                        }

                    </div>

                    <div className={Estilos.goHome}>
                        <button className={Estilos.btn} onClick={back}>back</button>
                    </div>
                </div>
            </main>






            {

                Object.keys(errors).length === 0 ? null :
                    <div className={Estilos.showErrors}>
                    </div>
            }


        </div>
    )
}

export default CreatingPage;