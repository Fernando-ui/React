import { types } from "../../types/types";
import '@testing-library/jest-dom';
import '@testing-library/react';

describe("Pruebas en tipos", () => {
  test("debe de ser correcto el objeto types", () => {
    const objetoType = {
      login: "[Auth] Login",
      logout: "[Auth] Logout",

      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Set Error",

      uiStartLoading: "[UI] Start loading",
      uiFinishLoading: "[UI] Finish loading",

      notesAddNew: "[Notes] New note",
      notesActive: "[Notes] Set active note",
      notesLoad: "[Notes] Load notes",
      notesUpdated: "[Notes] Updated note",
      notesDelete: "[Notes] Updated image url",
      notesLogoutCleaning: "[Notes] Logout Cleaning",
    };
    expect(objetoType).toEqual(types);
  });
});
