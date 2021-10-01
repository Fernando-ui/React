import React from 'react';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'



describe('Pruebas en <TodoList />', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();


    const wrapper = shallow(

        <TodoList
        todos = { demoTodos }
        handleDelete = { handleDelete }
        handleToggle = { handleToggle }
        
        />
    );

    test('Debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe de tener dos <TodoListItem /> ', () => {
        
        console.log(wrapper.find('TodoListItem').at(0).prop('handleDelete'));
        expect(wrapper.html('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.html('TodoListItem').length).toEqual(expect.any(Function));

        
        
    });


});

