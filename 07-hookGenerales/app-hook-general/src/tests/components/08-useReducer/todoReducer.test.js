import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";



describe('Pruebas en todoReducer', () => {
    
    test('Deve de retornar el esta do por defecto', () => {
        
        const state = todoReducer(demoTodos, {});
        console.log(state);
        
        expect(state).toEqual( demoTodos );
        
    });
    
    
    test('Debe de agregar un TODO ', () => {
        
        const obj = {

            type:'add',
            payload:{

                name:'Anacleto',
                apellido:'Gonzales',
                edad:'Desconocida',
                done:false,
            }
        }

        const state = todoReducer(demoTodos, obj);
        // console.log(state);
        
        expect(state.length).toBe(3);


    });
    
    test('debe de borar un TODO ', () => {

        // action.payloa = ID del TODO
        const obj = {

            type:'delete',
            payload:1
        }

        const state = todoReducer(demoTodos, obj)
        console.log(state);
        
        expect(state.length).toBe(1);
        console.log(state);
        expect(state).toEqual( [demoTodos[1]]);

    });



    test('Debe de hacer el Toggle del TODO ', () => {
        

        const obj = {

            type:'toggle',
            payload:1
        }

        const state = todoReducer(demoTodos, obj)
        expect(state[0].done).toBe(true)
        


    });
    


})
