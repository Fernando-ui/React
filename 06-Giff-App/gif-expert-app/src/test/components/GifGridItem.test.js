import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Haciendo pruebas con el componente <GifGridItem />', () => {
    
    const title = 'Titulo Grid';
    const url = 'https://algo.jpg'
    const wrapper = shallow(<GifGridItem  title={title} url ={url} />);

    test('Debe de coincidir el snappshot', () => {
        
        expect(wrapper).toMatchSnapshot();


    })
    
})
