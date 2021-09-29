import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks/>', () => {

    useCounter.mockReturnValue({

        counter:10,
        increment:()=>{}
    });
    
    test('Debe de mostrarse correctamente', () => {
        
        useFetch.mockReturnValue({

            data:null,
            loading:true, 
            error:null
        });
        
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper ).toMatchSnapshot();


    });
    
    test('Debera debe de mostar la informacion', () => {
        
        useFetch.mockReturnValue({

            data:[{
                author:'Fernando', 
                quote:'Hola mundo'
            }],
            loading:true, 
            error:null
        });

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Fernando');
        const wrapper = shallow( <MultipleCustomHooks />);

        console.log(wrapper.html());
        

    });
    

});
