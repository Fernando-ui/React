import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
import { act } from '@testing-library/react-hooks'

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(

        <TodoAdd 
            handleAddTodo = { handleAddTodo }        
        />
    );

    test('Debe de mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('No debe de llamar addTodo', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');

        console.log(formSubmit);

        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
        
    });
   
    
    test('Debe de llamar la funcion handleAddTodo', () => {
        
        const value = 'Aprender React';
        wrapper.find('input').simulate('change',{

            target:{
                value,
                name:'description'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');

        console.log(formSubmit);

        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith(expect.any(Object));
        expect( handleAddTodo ).toHaveBeenCalledWith({

            id:expect.any( Number ),
            desc: value,
            done:false,
        })
        
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    

});
