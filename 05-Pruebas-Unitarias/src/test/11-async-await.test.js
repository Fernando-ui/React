import { getImagen } from "../base-pruebas/11-async-await"

describe('Pruebas con async await', () => {

    test('Debe de retornar una info', async() => {

        const chiste = await getImagen();
        expect(typeof chiste).toBe('string')
    })
    
})
