import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Hola mundo');
    const handleInputChange = (e) => {

        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('haciendo el submit');
        setCategories( cats => [ ... cats, inputValue]);

    }

    return (
        <>
        <form onSubmit = { handleSubmit}>

            <input 
            type="text"
            value={ inputValue }
            onChange = { (e) => {handleInputChange(e)}}

            />

        </form>
        </>
    )
}
