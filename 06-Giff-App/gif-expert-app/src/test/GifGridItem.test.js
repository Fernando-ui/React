import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../components/GifGridItem';



describe('Pruebas en el componente <GifGridItem />', () => {

    test('Debe de mostrar el componente correctamente', () => {
        

        const wrapper = shallow(<GifGridItem />);

        expect(wrapper).toMatchSnapshot();
        
    });
    
})
