import React from 'react'

export const TodoListItem = ( {val, i, handleDelete, handleToggle} ) => {

    return (

        <>

        <li
        key={val.id}
        className="list-group-item"
        >
            <p className= {`${val.done && 'complete'}`}
                onClick={ () => handleToggle(val.id) }
            >{i + 1}. {val.desc} </p>
            <button 
            className="btn btn-danger"
            onClick={()=> handleDelete(val.id)}
            >Borrar</button>
        </li>


        </>
    )
}
