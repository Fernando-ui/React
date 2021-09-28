import { useForm } from '../../hooks/useForm'
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom'


describe('Validaciones con el formulario <useForm />', () => {
    
    const initialForm = { 

        name:'Fernando', 
        email:'fernando@gmail.com',
    };


    test('Debe de regresar un formulario por defecto ', () => {


        const { result } = renderHook(()=>  useForm(initialForm));
        const { values } = result.current;
        console.log(typeof values);
        

    });
    test('Debe de cambiar el valor del formulario  ', () => {


        const { result } = renderHook(()=>  useForm(initialForm));
        const [valores] = result.current;
        
        expect(valores).toEqual(initialForm);
        

    });
    
    test('Debe de cambiar el valor del formulario (cambiar name) ', () => {
        
        const { result } = renderHook(()=>  useForm(initialForm));
        const [valores,handleInpurChange,reset] = result.current;
        
        act(()=> handleInpurChange({

            target:{

                name:'name', 
                value:'Melissa'
            }

        }));

        const [ valores ] = result.current;
        expect(valores).toEqual({...initialForm, name:'Melissa'});
        console.log(valores);
        

    });
    
    test('Debe de re-establecer el formulario con Reset', () => {
        
        const { result } = renderHook(()=>  useForm(initialForm));
        const [valores,handleInpurChange,reset] = result.current;
        
        act(()=> {


            handleInpurChange({

                target:{
    
                    name:'name', 
                    value:'Melissa'
                }
    
            });
            reset();    
        

            
        });
        const [ valores ] = result.current;
        expect(valores).toEqual({...initialForm, name:'Melissa'});
        console.log(valores);
    

    });


    
});