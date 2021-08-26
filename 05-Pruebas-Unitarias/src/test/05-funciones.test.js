import { getUser, getUsuarioActivo } from '../base-pruebas/05-funciones.js'
describe('Funciones', () => {

    test('Debera Retornar un objeto', () => {
        
        const obje = getUser();
        const obje2 = {

            uid: 'ABC123',
            username: 'El_Papi1502'
        }


        expect(obje2).toEqual(obje);
 
    });

    test('Debe de retornar un objeto', () => {
      
        
        const obje = getUsuarioActivo('fernando');
        const obje2 = {

            uid:'ABC567', 
            username:'fernando'
        }

        expect(obje2).toEqual(obje);
    });

    
    
})
