// ! De donde sacamos el state
export const todoReducer = ( state, action ) => {

    switch (action.type) {
        case 'add':
            console.log(state);
            
            
            return [...state,action.payload];
            
            
    
        default:
            return state;
    }

};
