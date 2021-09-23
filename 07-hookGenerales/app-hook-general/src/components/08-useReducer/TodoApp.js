import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [{

    id: new Date().getTime(),
    desc:'Aprender React', 
    done: false,
}];



export const TodoApp = () => {


    const [ todo, dispatch ] = useReducer(todoReducer, initialState);
    console.log(todo);
    console.log(dispatch);
    


    const handleSubmit = (e) => {
    
        e.preventDefault();

        const newTodo = {

            id: new Date().getTime(),
            desc:'Nueva Tarea', 
            done: false,
        };
    
        const action = {

            type:'add',
            payload:newTodo,
        }

        dispatch( action );

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
                            <p className="text-center ">{i + 1} {val.desc} </p>
                            <button className="btn btn-danger">Borrar</button>
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
