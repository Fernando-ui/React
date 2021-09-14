import { getGifs } from "../../helpers/getGifs";


describe('Prueba con getGifs Fetch', () => {

    test('Debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });
    
    test('Debe de regresar 0 en el arreglo', async() => {
        
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
    
});
