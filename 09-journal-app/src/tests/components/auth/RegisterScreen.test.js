import React from "react";
import { MemoryRouter } from "react-router-dom";

import { mount } from "enzyme";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { RegistrerScreen } from "../../../components/auth/RegistrerScreen";
import { types } from "../../../types/types";

jest.mock('../../../actions/auth', () => ({
  startGoogleLogin:jest.fn(),
  startLoginEmailPassword:jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
};

let store = mockStore(initState);
// store.dispatch = jest.fn();
 
const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <RegistrerScreen />
    </MemoryRouter>
  </Provider>
);

describe('Prueas en <RegisterScreen/>', () => {
    let wrapper = shallow(<RegistrerScreen/>)

    test(' Debe de mostrarse correctamente ', () => {    
        expect( wrapper ).toMatchSnapshot();
    })
  test("Debe de hacer el dispatch de la accion respectiva", () => {
    const emailFild = wrapper.find('input[name="email"]');
    console.log(emailFild);
    emailFild.simulate("change", {
        target:{
            value:'',
            name:'email'
        }
    });
    wrapper.find('form').simulate('submit',{
        preventDefault(){}
    });
    const actions = store.getActions();
    expect( actions[0] ).toEqual({
        type: types.uiSetError,
        payload:'Email no es correcto'
    })
  });

  test('debe de mostrar la caja de alrta con el error', () => {
    const initState = {
        auth: {},
        ui: {
          loading: false,
          msgError: 'Email no es correcto',
        },
      };
      
      let store = mockStore(initState);
      // store.dispatch = jest.fn();
       
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <RegistrerScreen />
          </MemoryRouter>
        </Provider>
      );
      
      expect( wrapper.find('.auth__alert-error').exists()).toBe(true);
      expect( wrapper.find('.auth__alert-error').text().trim()).toBe(initState.ui.msgError);
  })
  
    
})
