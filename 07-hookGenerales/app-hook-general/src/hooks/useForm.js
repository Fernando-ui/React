import  { useState } from 'react'

export const useForm = ( initialState = {}) => {
    
    const [ values, setValues ] = useState(initialState);

    const reset = () => {

        setValues(initialState);

    }

    // * Este tiene el target prque se le envia el evento y del evento se desesctructura el target ya con el es con el que trabajamos 
    // * Lo que cambio es lo que estamos capturando, en este caso seria lo que escribimos en el input
    const handleInputChange = ({ target }) => {

        setValues({ 

            ...values,
            [target.name]:target.value
        })
    }

    return[values, handleInputChange, reset];
}
