// import { useContext } from "react";
import { types } from "../types/types";

// const state = {

//     name:'Fernando',
//     logged: true,
// }

// const context = useContext(contextValue)

export const authReducer = ( state = { }, action ) => {

    switch (action.type) {
        case types.login:
            return{
                ... action.payload,
                logged: true
            }
            
        case types.logout:
            return{
                
                logged:false
            }


        default:
            return state;
    }

}

