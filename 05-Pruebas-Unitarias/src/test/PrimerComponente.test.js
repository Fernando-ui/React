import React from 'react';
import {shallow} from 'enzyme';
import PrimerComponente from "../PrimerComponente";

describe('Pruebas en <PrimerComponente />', () => {

    
    test('Debe de mostrar  <PrimerComponente /> correctamente', () => {
        const saludo = 'Hola, Soy Fernando';
        const wrapper = shallow(<PrimerComponente saludo={saludo}/>);
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar  subtitulo correctamente', () => {
        const saludo = 'Hola, Soy Fernando';
        const subtitulo = 'Somos un subtdfitulo';

        const wrapper = shallow(<PrimerComponente 
            saludo={saludo}
            subtitulo={subtitulo}
            />);
        
        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(subtitulo)
    
    });
    
});
