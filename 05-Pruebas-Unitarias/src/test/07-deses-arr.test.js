import { retornaArreglo } from '../base-pruebas/07-deses-arr.js'
describe('Arreglos', () => {
    
    test('Debe retornar un string y un numero', () => {
        
        const arr = retornaArreglo();

        expect(arr).toEqual(['ABC',123])

    })
    
})
