import React, { useEffect, useState } from 'react';
import './effects.css'

export const SimpleForm = () => {

    const [formState, setformState] = useState({

        name:'',
        email:'',
    });

    const {name, email} = formState;


    useEffect( () => {
        
        
        console.log('Hey amigo');
        
    });

    const handleInputChange = ({target}) => {
    
        console.log(target);
        console.log(formState);
        
        setformState({

            ...formState,
            [target.name]:target.value
            
        })
        
    
    }
    
    

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className='form-group'>

            <input 
            type="text"
            name='fer'
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value = {name}
            onChange = { handleInputChange}
            />
            </div>
            
        </>
    )
}
