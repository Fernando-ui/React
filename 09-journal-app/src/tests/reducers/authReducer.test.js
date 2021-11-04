import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";


describe('Pruebas en authReducer', () => {
   test('debe de recibir la accion login', () => {
       const initState = {};
       const action = {
           type:types.login,
           payload: {
               uid:'abc',
               displayName:'Fernando'
           }
       }
       const state = authReducer( initState, action);
       console.log( state );
       expect( state ).toEqual({ 
           uid:'abc',
           name:'Fernando',
       })
   });

   test("debe de recibir la accion logout", () => {
     const initState = {
         uid:'lkfajsdlñfksjdf',
         name:'Fernando'
     };
     const action = {
       type: types.logout,
     };
     const state = authReducer(initState, action);
     expect(state).toEqual({

     });
   });

   test('No debe de hacer cambios en el state', () => {
    const initState = {};
    const action = {
      type: 'skdfjsldkjf'
    };
    const state = authReducer(initState, action);
    console.log(state);
    expect(state).toEqual( initState );
   });
    
});
