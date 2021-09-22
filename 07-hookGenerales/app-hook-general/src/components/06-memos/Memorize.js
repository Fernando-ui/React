import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small} from './Small'

import '../02-useEffect/effects.css'

export const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setshow] = useState(true);

    const handleShow = () => {
    
        setshow(!show);
    
    }
    
    

    return (
        <div>
            <h1>Counter:<Small value={counter}/></h1>
            <hr/>
            
            <button 
            className="btn btn-primary"
            onClick={increment}
            >+1</button>

            <button
                className="btn btn-outline-primary ml-3 btn-mostarOcultar"
                onClick={handleShow}
            
            >
                Show/Hide: {JSON.stringify(show)}
            </button>
        </div>
    )
}
