import React from 'react';
import { mount, shallow } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter } from 'react-router';


describe('Pruebas en <HeroScreen/>', () => {

    const history = {

        length:10,
        push:jest.fn(),
        goBack:jest.fn(),
    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history={ history }/>

        </MemoryRouter>
    );

    test('Debe de moastar el componente redirect si no hay argumentos en el URL', () => {
       
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });
    

});
