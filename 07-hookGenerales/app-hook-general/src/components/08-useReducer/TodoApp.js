import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';
// import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


const init = ( ) =>{

    return JSON.parse( localStorage.getItem('todos')) || [] ;
}


export const TodoApp = () => {


    const [ todo, dispatch ] = useReducer(todoReducer, [], init);
    
    useEffect(() => {
        
        localStorage.setItem('todos',JSON.stringify(todo))

    }, [todo]);


    const handleAddTodo = ( newTodo ) => {

        dispatch( {
            type:'add',
            payload:newTodo

        })
    }


    const handleDelete = ( todoId ) => {

        console.log(todoId);


        const action = {

            type:'delete',
            payload:todoId
        };

        dispatch(action);
        
        
    }

    const handleToggle = ( todoId ) => {
    
        dispatch({

            type:'toggle',
            payload:todoId,
        })
    
    }
    
    return (
        
        <div>
            <h1>TodoApp ( {todo.length} )</h1>
            <hr/>
            <div className="row">

                <div className="col-7">
                <TodoList  
                todos={ todo }
                handleDelete = { handleDelete }
                handleToggle = { handleToggle }
                />
                
                </div>

                <div className="col-5">
                    
                    <TodoAdd 
                        handleAddtodo={ handleAddTodo}
                    />

                </div>

            </div>           
        </div>
    )
}
