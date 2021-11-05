import React from "react";
import { MemoryRouter } from "react-router-dom";

import { LoginScreen } from "../../../components/auth/LoginScreen";

import { mount } from "enzyme";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startGoogleLogin } from "../../../actions/auth";

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
store.dispatch = jest.fn();
 
const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  </MemoryRouter>
);
describe("Pruebas en <LoginScreen />", () => {
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSanpshot();
  });
  test('Debe de disparar la accion de startLoginScreen', () => {
    wrapper.find('.google-btn').prop('onClick')();    
    console.log('Hey');
    expect( startGoogleLogin ).toHaveBeenCalled();
  });
  test('Debe de disparar el startLogin con los respectivos argumentos', () => {
    wrapper.find('form').prop('onSubmit')(
      {preventDefault(){}}
    );
    expect( startLoginEmailPassword ).toHaveBeenLastCalledWidth('Fernando@gmail.com','123456');

  })
  
  
});
