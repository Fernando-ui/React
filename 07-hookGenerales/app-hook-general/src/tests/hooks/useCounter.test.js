import { useCounter } from '../../hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom'

describe('Pruebas en useCounter', () => {
    

    test('Debe de retornar valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() ); 
        console.log(result.current);
        
        expect(result.current.counter).toBe(1);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');


    });

    test('Debe de tener el counter en 100', () => {
        
        const { result } = renderHook( () => useCounter(100) ); 
        
        
        // expect(typeof result.current.decrement).toBe(100);
        
        
    });
    
    test('Debe de incrementar el counter en 1', () => {
        
        const { result } = renderHook( () => useCounter(100) ); 
        const { increment } = result.current;

        act(()=> {

            increment();
        });

        const { counter } = result.current;
        expect( counter ).toBe(101);

    });
    test('Debe de decrementar el counter en 1', () => {
        
        const { result } = renderHook( () => useCounter(100) ); 
        const { decrement } = result.current;

        act(()=> {

            decrement();
        });

        const { counter } = result.current;
        expect( counter ).toBe(99);

    });
    test('Debe de resetearse el contador', () => {
        
        const { result } = renderHook( () => useCounter(100) ); 
        const { increment, reset } = result.current;

        act(()=> {

            increment();
            reset();
        });

        const { counter } = result.current;
        expect( counter ).toBe(100);

    });
    
})
