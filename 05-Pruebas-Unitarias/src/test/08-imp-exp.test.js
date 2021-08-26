import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp.js";
import heroes from "../data/heroes.js";

describe('Arreglos2', () => {

    test('Debe de retornar un heore por ID', () => {
       
        const id = 10;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( heroe => heroe.id === id)

        expect( heroe ).toEqual( heroeData )
    });
    
    test('Debe retornar un arreglo con heroes de DC', () => {
        
        const owner = 'DC';
        const heroe = heroes.find(h => h.owner === owner);
        console.log(heroe);
        
        
        expect(owner).toEqual(heroe.owner);

    });

    test('Debe retornar un arreglo con heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroesF = getHeroesByOwner(owner);
        const heroe = heroes.filter(h => h.owner === owner);
        console.log(heroe);
        
        
        expect(heroesF.length).toBe(2);

    })
    
})
