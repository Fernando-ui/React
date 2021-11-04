import { types } from '../types/types';


export const setError = (err) => ({
    type:types.uiSetError,
    payload:err,
});

export const removeError = () => ({
    type:types.uiRemoveError,
});

export const uistartLoading = () => ({
    type:types.uiStartLoading
})
export const uifinishLoading = () =>({
    type:types.uiFinishLoading 
})




