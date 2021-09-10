import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../components/GifGridItem';



describe('Pruebas en el componente <GifGridItem />', () => {

    // * Estos son los argumentos que le enviaremos a nuestro componente
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={ title } url={ url} />);

    test('Debe de mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe de tener un parrafo con el titulo', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);


    });
    
    test('Debe de tener una imagen igual al url y alr de los props', () => {
        
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    
})
