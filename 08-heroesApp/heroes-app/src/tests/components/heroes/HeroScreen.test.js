import React from 'react';
import { mount, shallow } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';


describe('Pruebas en <HeroScreen/>', () => {

    const history = {

        length:10,
        push:jest.fn(),
        goBack:jest.fn(),
    }

    
    test('Debe de moastar el componente redirect si no hay argumentos en el URL', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <HeroScreen history={ history }/>
                <Route path="/hero/:heroeId" component={HeroScreen}/>
            </MemoryRouter>
        );
        expect(wrapper.find('.row').exists()).toBe(true);
    });
    
    test('debe de regresar a la  pantalla anterior con push', () => {
        
        const history = {

            length:1,
            push:jest.fn(),
            goBack:jest.fn(),
        }
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <HeroScreen history={ history }/>
                <Route 
                path="/hero/:heroeId" 
                component={ (props) => <HeroScreen history={history}/>}
                
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();

    });

    test('debe de regresar a la pantalla anterior GOBACK', () => {
        
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <HeroScreen history={ history }/>
                <Route 
                path="/hero/:heroeId" 
                component={ (props) => <HeroScreen history={history}/>}
                
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledTimes(0);
        expect(history.goBack).toHaveBeenCalled();

    });

    test('debe de lamar el redirect si el heroe no existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <HeroScreen history={ history }/>
                <Route 
                path="/hero/:heroeId" 
                component={ (props) => <HeroScreen history={history}/>}
                
                />
            </MemoryRouter>
        );
        
        console.log(wrapper.text('Redirect').toBe(''));
        
    })
    
    
    
});
