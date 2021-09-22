import React from 'react'

export const Small = React.memo (({value}) => {

    console.log('Mostrando de Nuevo');
    
    return (
        
            <small>{value}</small>
    
    )
})
