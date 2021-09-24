import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';
import { useForm } from '../../hooks/useForm';

const init = ( ) =>{

    return JSON.parse( localStorage.getItem('todos')) || [] ;
}


export const TodoApp = () => {


    const [ todo, dispatch ] = useReducer(todoReducer, [], init);
    
    const [{description}, handleInputChange, reset] = useForm({

        description:''
    });
    

    useEffect(() => {
        
        localStorage.setItem('todos',JSON.stringify(todo))

    }, [todo]);


    const handleDelete = ( todoId ) => {

        console.log(todoId);


        const action = {

            type:'delete',
            payload:todoId
        };

        dispatch(action);
        
        
    }

    const handleSubmit = (e) => {
    
        e.preventDefault();

        if(description.trim().length <= 1){

            return;
        }

        const newTodo = {

            id: new Date().getTime(),
            desc:description, 
            done: false,
        };
    
        // * Esta sera la accion que tendra que realizar el boton, esta se declara en el evento, para que este sepa que es lo que va a mandar
        const action = {

            type:'add',
            payload:newTodo,
        }

        dispatch( action );
        reset();

    }
    
    return (
        
        <div>
            <h1>TodoApp ( {todo.length} )</h1>
            <hr/>
            <div className="row">

                <div className="col-7">
            <ul className="list-group list-group-flush">
                {
                    todo.map((val, i) => (

                        <li
                        key={val.id}
                        className="list-group-item"
                        >
                            <p className="text-center ">{i + 1}. {val.desc} </p>
                            <button 
                            className="btn btn-danger"
                            onClick={()=> handleDelete(val.id)}
                            >Borrar</button>
                        </li>
                    ))
                }
            </ul>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>

                    <form onSubmit={ handleSubmit }>
                        <input 
                            className="form-control mb-3"
                            type="text"
                            name="description"
                            placeholder="Aprender..."
                            autoComplete="off"
                            value={ description }
                            onChange={handleInputChange}
                        />

                        <button 
                            type="submit"
                            className="btn btn-outline-primary">
                            Agregar
                        </button>
                    </form>
                </div>

            </div>           
        </div>
    )
}
