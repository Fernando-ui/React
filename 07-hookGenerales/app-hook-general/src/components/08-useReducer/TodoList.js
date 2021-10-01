import React from 'react'
import { TodoApp } from './TodoApp'
import { TodoListItem } from './TodoListItem'


const {  } = TodoApp();


export const TodoList = ( {todos, handleDelete, handleToggle} ) => {




    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((val, i) => (

                    <TodoListItem 
                    key={val.id}
                    val={val}
                    i={i}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                    />
                ))
            }
        </ul>
    
    )

}
