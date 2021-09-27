import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';


describe('Pruebas con el conunter App', () => {

    let wrapper = shallow(<CounterApp value={0}/>);

    // para que se reinicie el shallow
    beforeEach(() => {
        wrapper = shallow(<CounterApp value={0}/>);
    })


    test('Debera mostrar <CounterApp /> correctamente  ', () => {
        
        const valor = 10;

        expect(wrapper).toMatchSnapshot();

    });
    test('Debera mostrar <CounterApp /> correctamente con el valor de 100  ', () => {
        
        const valor = 100;
        const wrapper = shallow(<CounterApp value={100} />);
        const valorDeCounter = wrapper.find('h2').text();

        expect(valorDeCounter).toBe('100');

    });

    test('Debe de incrementar con el boton de +1 ', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);

        expect(counterText).toBe('1');

    })
    test('Debe de incrementar con el boton de -1 ', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);

        expect(counterText).toBe('-1');

    })
    test('Debe de incrementar con el boton de +1 ', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);
        
        expect(counterText).toBe('-1');
        
    })
    
    
    test('Debe de colocar el valro por defecto con el boton reset   ', () => {
        
        const wrapper = shallow(<CounterApp value={105} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');
        console.log(counterText);

    })
    
});
