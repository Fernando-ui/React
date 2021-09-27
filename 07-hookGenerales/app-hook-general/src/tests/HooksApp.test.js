import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';
import '@testing-library/jest-dom'

describe('Pruebas con componentesm Hooks', () => {
  
  let wrapper = shallow (<HooksApp/>);


  test('Debe de regresar el valor del DOM', () => {


    expect(wrapper).toMatchSnapshot();


  });
  
});
