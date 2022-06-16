import { useState } from "react"

export const useValidate = (initialForm, validateFunction) => {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
   
    const handleChange  = (e) => {
        const {name,value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleBlur  = (e) => {
        handleChange(e);
        setErrors(validateFunction(form))
        
    };


    const handleSubmit  = (e) => {
        e.preventDefault();
        if(Object.keys(errors).length === 0){
            console.log('envia los datos')
        }else{
            alert('No se puede enviar los datos, hay errores')
        }

    };

    return {
        form,
        setForm, 
        errors, 
        handleChange,
        handleBlur
    }
}