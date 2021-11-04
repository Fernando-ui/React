import { login, logout } from '../../actions/auth';
import thunk from 'redux-thunk';
import { types } from '../../types/types';
import '@testing-library/jest-dom';

let store  = mockStore(initState);

describe('Pruebas con as accionees de Auth', () => {

    beforeEach(() => {
        store = mockStore( initState );
    })

    test('login logout debe de crear la accion respectiva', () => {
        const uid = 'ABC123';
        const displayName = 'Fernando';

        const loginAction = login( uid, displayName );
        const logoutAction = logout();

        expect( loginAction ).toEqual({
            type:types.login,
            payload:{
                uid,
                displayName
            }
        });
        expect( logoutAction ).toEqual({
            type:types.logout,
        });
    });
    
    test(" debe de realizar el startLogout", async () => {
      await store.dispatch(startLogout());
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: types.logout,
      });
      expect(actions[1]).toEqual({
        type: types.logout,
      });
    });
    test('debe de iniciar el startLoginEmai.Password', async() => {
        await store.dispatch( startLoginEmailPassword('test@testing.com','123456'));
        const actions = store.getActions();
        console.log(actions);
        expect( action[1]).toEqual({
            type:types.login,
            payload:{
                uid:'lkasdjfi3klkj',
                displayName:null,  
            }
        })
        
    });
    
})
