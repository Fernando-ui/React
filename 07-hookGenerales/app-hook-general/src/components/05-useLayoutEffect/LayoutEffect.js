import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './layout.css'


export const LayoutEffect = () => {

    const { counter, increment, decrement} = useCounter();
    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];
    
    const pTag = useRef();

    useLayoutEffect(() => {
        
        console.log(pTag.current.getBoundingClientRect());
        
        
    }, [quote])
    
    return (
        <>
            <h1>LayoutEffect</h1>
            <h2>Breaking Bad</h2>
            
            <blockquote className="blockquote text-right">

                <p 
                className="mb-0 texto-parrafo"
                ref={pTag}
                >{quote}</p>

            </blockquote>

            <div className="container-Botones">
            <button onClick={ decrement } className="btn btn-primary boton-anterior">Anterior</button>
            <button onClick={ increment } className="btn btn-primary boton-siguiente">Siguiente</button>

            </div>

        </>
    )
}
