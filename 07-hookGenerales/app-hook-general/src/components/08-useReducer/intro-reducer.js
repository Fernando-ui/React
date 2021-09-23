

const initialState = [{

    id:1,
    todo:'Comprar pan', 
    done:false,
}];


const newTodo = {

    id:2,
    todo:'Comprar leche', 
    done:false,
    
}


const todoReducer = (state = initialState, action) => {

    if(action?.type === 'agregar'){

        return [...state, action.payload]
    }


    return state;

}

let todos = todoReducer();


const agregarAction = {

    type:'agregar',
    payload:newTodo,

}


todos  = todoReducer( todos, agregarAction )

console.log(todos);

