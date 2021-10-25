import { Middleware } from "redux";
import { StoreState } from "../index";

const loadState = (): StoreState => {
  let retval;
  try {
    const item = localStorage.getItem("state");
    if (item !== null) {
      retval = JSON.parse(item);
    }
  } catch {
    // TODO: log
  }
  return retval;
};

const saveState = (state: StoreState) => {
  try {
    const item = JSON.stringify(state);
    localStorage.setItem("state", item);
  } catch {
    // TODO: log
  }
};

const persistLocalStorage: Middleware = (store) => (next) => (action) => {
  next(action);
  saveState(store.getState());
};

export { loadState, persistLocalStorage };
