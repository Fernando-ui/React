import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'


export const MultipleCustomHooks = () => {

    const { counter, increment, decrement} = useCounter();
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];
    console.log(author, quote);
    
    
    
    return (
        <>
            <h1>Custom Hooks</h1>
            <h2>Breaking Bad</h2>
            
            {
                loading
                ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>

                )
                :
                (
                    <blockquote className="blockquote text-right">

                        <p className="mb-0 texto-parrafo">{quote}</p>
                        <footer className="blockquote-footer footer">{author}</footer>

                    </blockquote>

                )
            }
            <div className="container-Botones">
            <button onClick={ decrement } className="btn btn-primary boton-anterior">Anterior</button>
            <button onClick={ increment } className="btn btn-primary boton-siguiente">Siguiente</button>

            </div>

        </>
    )
}
