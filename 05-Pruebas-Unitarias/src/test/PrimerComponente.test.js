import React from 'react';
import {shallow, configure} from 'enzyme';
import PrimerComponente from "../PrimerComponente";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

configure({adapter: new Adapter()})
describe('Pruebas en <PrimerComponente />', () => {

    
    test('Debe de mostrar  <PrimerComponente /> correctamente', () => {
        const saludo = 'Hola, Soy Fernando';
        const wrapper = shallow(<PrimerComponente saludo={saludo}/>);
        
        expect(wrapper).toMatchSnapshot();
    });
    
});
