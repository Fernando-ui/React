import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks/>', () => {
    
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

        const wrapper = shallow( <MultipleCustomHooks />);
        console.log(wrapper.html());
        

    });
    

});
