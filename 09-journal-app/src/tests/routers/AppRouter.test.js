import React from "react";
import { MemoryRouter } from "react-router-dom";

import { mount } from "enzyme";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startGoogleLogin, startLoginEmailPassword } from "../../../actions/auth";

import { login } from "../../actions/auth";
import { AppRouter } from "../../routers/AppRouter";

jest.mock('../../actions/auth', () => ({
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
 
describe('Pruevs en <AppRouter/>', () => {

    test('debe de llamar el login si estoy autenticado', async() => {
        act(async()=>{
            
            const userCred = firebase

            const wrapper = mount(
                <MemoryRouter>
                <Provider store={store}>
                    <AppRouter />
                </Provider>
                </MemoryRouter>
            );

        })
    });
    
});
