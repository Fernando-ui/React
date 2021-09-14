
import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCattegory/>', () => {
    
    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    test('Debe de mostarse correctamente', () => {
   
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de cambiar la caja de texto', () => {
        
        const value = 'Hola mundo';
        const input = wrapper.find('input');
        input.simulate('change',{

            target:{
                value
            }
        });

        expect(wrapper.find('p').text().trim()).toBe(value)
    });
    

});
