import { types } from '../types/types';

export const buttonReducer = (state = {}, action) => {
    switch (action) {
        case types.uiStartLoading:
            return{
                loading:action.payload,
            };
        case types.uiFinishLoaging:
            return{
                loading:action.payload,
            };

        default:
            return state;
    }
}

