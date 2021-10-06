import { mount, shallow } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';



describe('Pruebas con <LoginScreen />', () => {

    const setUser = jest.fn();
    const wrapper = mount(

        <UserContext.Provider value={{
            setUser
        }}>

            <LoginScreen />

        </UserContext.Provider>
    );

    test('debe de  mostartse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });
    
    test('debe de ejecutar el setUser con el argumento esperado', () => {
    
        
        wrapper.find('button').simulate('click');

        expect( setUser ).toHaveBeenCalledWith({
            
            id:234,
            nombre:'fernando',
            apellido:'desconocido'
        })
    });
    

});
