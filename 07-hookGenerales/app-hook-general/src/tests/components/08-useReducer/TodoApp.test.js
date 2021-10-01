import React from 'react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { mount, shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react'


describe('Pruebas en <TodoApp />', () => {
    
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn(() =>{});

    test('should show correctly', () => {
        

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de agreagar un TODO ', () => {
       
        const wrapper = mount(<TodoApp />);
        act(()=>{

            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1]);
            
        });

        expect( wrapper.find('h1').text().trim()).toBe('TodoApp (2)')
        expect( localStorage.setItem).toHaveBeenCalledTimes(2);
        expect( localStorage.setItem).toHaveBeenCalledWith(2);
    });
   
    
    test('Debe de eliminar un todos', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);

        expect( wrapper.find('h1').text().trim()).toBe('TodoApp ( 1 )')

    });
    

});
