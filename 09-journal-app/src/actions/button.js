import { types } from '../types/types';

export const uiStartLoading = () =>( {

    type:types.uiStartLoading,
    loading:true,    
})

export const uiFinishLoading = () => ({
    type:types.uiStartLoading,
    loading:false,    
})

