import {
  removeError,
  setError,
  uifinishLoading,
  uistartLoading,
} from "../../actions/ui";
import { types } from "../../types/types";

describe("Pruebas en ui-actions", () => {
  test("Todas las acciones deen de funcionar ", () => {
    const action = setError("Ayuda");
    expect(action).toEqual({
      type: types.uiSetError,
      payload: "Ayuda",
    });
    const removeErrorAction = removeError();
    const uistartLoadingAction = uistartLoading();
    const uifinishLoadingAction = uifinishLoading();

    expect(removeErrorAction).toEqual({
      type: types.uiRemoveError,
    });
    expect(uistartLoadingAction).toEqual({
      type: types.uiStartLoading,
    });
    expect(uifinishLoadingAction).toEqual({
      type: types.uiFinishLoading,
    });
  });
});
