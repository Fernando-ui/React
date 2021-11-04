import React from "react";
import { MemoryRouter } from "react-router-dom";

import { LoginScreen } from "../../../components/auth/LoginScreen";

import { mount } from "enzyme";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

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
  });
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSanpshot();
  });
});
