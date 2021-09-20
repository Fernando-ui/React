
import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCattegory/>', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = { setCategories }/>);
    });

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

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la informacion onSubmit', () => {
        
        wrapper.find('form').simulate('submit',{

            preventDefault(){   }
        });

        expect(setCategories).not.toHaveBeenCalled();

    });
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    
        const value = '';
        const input = wrapper.find('input');

        input.simulate('change',{

            target:{

                value
            }
        });

        wrapper.find('form').simulate('submit',{

            preventDefault(){   }
        });

        expect(setCategories).not.toHaveBeenCalled();
        expect(wrapper.find('p').text().trim()).toBe(value);
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    

});
