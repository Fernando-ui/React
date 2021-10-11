import React from 'react';
import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router';
import { types } from '../../types/types';

describe('Pruebas en <Navbar/>', () => {

    const historyMock = {

        push:jest.fn(),
        replace:jest.fn(),
        location:{},
        listen:jest.fn(),
        createHref:jest.fn(),
    }
    
    const contextValue = {

        dispatch:jest.fn(),
        user:{

            logged: true,
            name:'Anacleto'
        }
    }


    const wrapper = mount(

        <AuthContext.Provider valu={ contextValue }>
            <MemoryRouter>
                <Router history={historyMock}>
                <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>

    )

    afterEach(() => {

        jest.clearAllMocks();
    })


    test('Debe de mostrarse correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim()).toBe('Anacleto');
    });

    test('debe de llamar el logout y usar el history ', () => {
       
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({

            type:types.logout
        });

        expecti(historyMock.replace).toHaveBeenCalledWith('./login')
    });
    
    
})
