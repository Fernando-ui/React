// * Configuracon redux-mock-store
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk'; // 
import { startNewNote } from '../../actions/notes';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
    auth:{
        uid:'TESTING', 
    }
})

// *Iniciamos las pruebas generales

describe('Pruebas con las acciones de notes', () => {
    test('Debe de crear una nueva nota startNewNote',async () => {
        await store.dispatch( startNewNote);
        const actions = store.getActions();
        expect( actions[0] ).toBe({
            type:types.notesActive,
            payload:{
                id:expect.any(String),
                title:'', 
                body:'',
                date:expect.any(Number),
            }
        });
        expect( actions[1]).toEqual({
            payload:{
                id:expect.any(String),
                title:'', 
                body:'',
                date:expect.any(Number),
            }
        })
        const docId = actions[0].payload.id;
        // await db.doc(`/TESTING/journal/notes/${docId}`).delete();
        
    });
})
