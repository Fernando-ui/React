import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Haciendo pruebas con el componente <GifExpertApp />', () => {
    
    
    test('El snapshot debe de coincidir', () => {
        
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('Debe de mostrar una lista de categorias', () => {
        
        const categories = ['One punch', 'dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length  )  ;
    })
    

});
