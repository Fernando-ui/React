import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
    
        console.log('Componente montado');
        
        return () => {
            console.log('Componente Desmontado');
            
        }
    }, [])

    
    return (
        <>
            <h3>Hola amigos</h3>
        </>
    )
}
