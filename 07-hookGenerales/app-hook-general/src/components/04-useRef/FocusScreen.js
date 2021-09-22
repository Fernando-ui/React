import React, { useRef } from 'react'
import '../02-useEffect/effects.css'


export const FocusScreen = () => {


    const inputRef = useRef();
    console.log(inputRef);
    
    const handleClick = () => {
        
        // document.querySelector('input').select();
        inputRef.current.select();
        console.log(inputRef.current);
        
        
    }
    
    return (
        <>
        <div id="containerName">
        <h1>Focus Screen</h1>
        <hr/>

        <input  
        className="form-control"
        placeholder="Nombre"
        ref= { inputRef }
        />

        <button 
        className="btn btn-primary"
        id="botonFocus"
        onClick={ handleClick }
        >Focus</button>
        </div>
            
        </>
    )
}
