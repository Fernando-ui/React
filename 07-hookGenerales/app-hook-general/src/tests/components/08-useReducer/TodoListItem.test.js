import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';



describe('Pruebas <TodoListItem />', () => {
    
    const handleDelete = jest.fn(); 
    const handleToggle = jest.fn();     

    const wrapper = shallow( 
    
        <TodoListItem 
        val={demoTodos[0]}
        i={1}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        
        />)

    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();


    });
    
    test('Debe de llamar la funcion de borrar', () => {
        
        wrapper.find('button').simulate('click');

        // expect(handleDelete).toHaveBeenCalledWith(1);
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
        
        //jest.fn()
        //toHAveBeenCalled
    });


    test('Debe de llamar la funcion de toggle', () => {
        
        wrapper.find('p').simulate('click');

        expect(handleToggle).toHaveBeenCalledWith(1);
        //jest.fn()
        //toHaveBeencalleWidth

    });
    

    test('Debe de mostrar el texto correctamente', () => {
        const wrapper = shallow( 
    
            <TodoListItem 
            val={demoTodos[0]}
            i={1}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            
            />)
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`2. ${demoTodos[0].desc}`)
        
    });
    
    
    test('Debe tener la clase complete', () => {
       
        
        const todo = demoTodos[0];
        todo.done = true; 

        const wrapper = shallow( 
    
            <TodoListItem 
            val={demoTodos[0]}
            
            />)

        console.log( wrapper.html() );
        
        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    });
    

});
