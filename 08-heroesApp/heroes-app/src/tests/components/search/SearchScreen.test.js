import React from 'react';
import {mount} from 'prop-types'
import { MemoryRouter, Router } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';


describe('Pruebas en <SearchScreen />', () => {
    
    test('debe de mostrarse correctamente con valores por defecto', () => {
      
        
        const wrapper = mount(

            <MemoryRouter initialEntries={['/search']}>
                <Router 
                path='/search' 
                component={SearchScreen}
            />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
    });
    

    test('debe de mostrar a Batman y el input con el valor del queryString ', () => {
       
        const wrapper = mount(

            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Router 
                path='/search' 
                component={SearchScreen}
            />
            </MemoryRouter>
        )
            expect(wrapper.find('input').prop('value')).toBe('batman');
            ecpect(wrapper).toMatchSnapshot();
    });
    

    test('Debe de mostrar un error si no se encuentra el hero', () => {
        const wrapper = mount(

            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Router 
                path='/search' 
                component={SearchScreen}
            />
            </MemoryRouter>
        )
            expect(wrapper.find('.alert-danger').text().trim().trim()).toBe(`There is no a hero with batman123`)
            // ecpect(wrapper).toMatchSnapshot();
    });
    

    test('debe de llamar el push del history ', () => {
        
        const history = {
            push:jest.fn()
        };

        const wrapper = mount(

            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Router 
                path='/search' 
                component={ ()=> <SearchScreen history={ history}/>}
            />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change',{

            target:{
                name:'searchText',
                value:'batman'
            }
        });
        wrapper.find('form').prop('onSubmit')({

            preventDefault(){}
        });

        expect( history.push).toHAveBeenCalledWith(`?q=batman`);

    });
    

});
