import '@testing-library/jest-dom'
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import React from 'react'


jest.mock('../../hooks/useFetchGifs'); 

describe('Pruebas con <GifGrid />', () => {

    const categoria = 'Rick and Morty';
    
    test('Debe de coincidir el snapshot ', () => {
        
        useFetchGifs.mockReturnValue({
            
            data:[],
            loading:true
            
        });
        
        const wrapper = shallow(<GifGrid category={categoria} />);
        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const img = [{
            id:'abc', 
            url:'https://algo.jpg',
            title:'cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            
            data:[img],
            loading:false
            
        });
        
        const wrapper = shallow(<GifGrid category={ categoria} />);        

        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(img.length)
    });
    
    test('Debe hacer match con el snapShoot', () => {
    
        

    });
    

})
