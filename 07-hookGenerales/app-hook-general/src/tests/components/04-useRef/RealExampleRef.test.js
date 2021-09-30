import React from "react";
import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";
import "@testing-library/jest-dom";


// jest.mock('../../../components/04-useRef/RealExampleRef');

describe("Pruebas en <RealExampleRef/>", () => {

    const wrapper = shallow(<RealExampleRef />);
    
    
    test("Debe mostrarse correctamente ", () => {
        
        expect(wrapper).toMatchSnapshot();
        
        
    });
    
    test("Debe de mostrar el componente <MultipleCustomHooks />", () => {
        
        const wrapper = shallow(<RealExampleRef />);
        wrapper.find('button').simulate('click');
        
        // wrapper.find('.btn').simulate();
        console.log(wrapper.exists());

        expect(wrapper.find('MultipleCustomHooks').exists()).toEqual(true);

    });



});
