// * Configuracon redux-mock-store
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk'; // 
import { startLoadingNotes, startNewNote } from '../../actions/notes';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth:{
        uid:'TESTING', 
    }
}

let store = mockStore(initState)

// *Iniciamos las pruebas generales

describe('Pruebas con las acciones de notes', () => {

    beforeEach(() => {
        store = mockStore(initState)
  
    });
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
        // const docId = actions[0].payload.id;
        // await db.doc(`/TESTING/journal/notes/${docId}`).delete();
        
    });
    test('startLoadingNotes debe cargar las notas', async() => {
        await store.dispatch( startLoadingNotes( 'TESTING' ));
        const  actions = store.getActions();
        console.log(actions);
        expect(actions[0]).toEqual({
            type:types.notesLoad,
            payload: expect.any(Array),
        })
        const expected = {
            id:expect.any(String),
            title: expect.any(String),
            body:expect.any(String),
            date:expect.any(Number),
        }
        expect( actions[0].payload[0]).toMatchObject( expected );
    });
    
    test('startSaveNote debe de actualizar la nota',async () => {
        const note = {
            id:'lsdfkoifjwejsdkfldf',
            title:'titulo',
            body:'body'
        };
        await store.dispatch( startSaveNote( note ) );
        const actions = store.getActions();
        expect( actions[0].type).toBe(types.notesUpdated);

        // const docRef = await db.doc(`/TESTING/journal/notes/${ note.id }`).get() 
        // expect( docRef.data().title).toBe()
    });
    
})
