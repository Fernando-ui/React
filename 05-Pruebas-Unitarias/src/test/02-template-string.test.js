import { getSaludo } from '../base-pruebas/02-template-string.js';
import '@testing-library/jest-dom';

describe('Prueba Template String', () => {

    test('Prueba getSaludo', () => {
        
        const nombre = 'Hola Fernando';
        const saludo = getSaludo('Fernando');

        expect(saludo).toBe(nombre);
        

    });

    test('Debera regresar hola Armando', () => {
        
        const saludo = getSaludo();
        expect('Hola Armando').toBe(saludo);
    })
    
    
})

