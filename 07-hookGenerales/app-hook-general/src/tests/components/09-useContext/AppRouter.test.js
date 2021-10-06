import React from 'react';
import { mount } from 'enzyme'
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <AppRouter /> ', () => {
  
    const wrapper = mount( <AppRouter /> );
    const user = {

        id:1,
        name:'Fernando'
    }


    test('Debe de mostrarse correctamente', () => {
        
        <UserContext.Provider value={{

            user
        }}>

            <AppRouter />

        </UserContext.Provider>

        expect( wrapper ).toMatchSnapshot();

    });
    

})
