import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

import '../02-useEffect/effects.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
    
        setShow(!show);
    
    }
    
    return (

        <div>
            <h1>RealExampleRef</h1>
            <hr/>

            { show && <MultipleCustomHooks /> }              

            <button 
            className="btn btn-primary" 
            onClick={ handleShow }>
                Mostrar/Ocultar
            </button>

        </div>
    )
}
