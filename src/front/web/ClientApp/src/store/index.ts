import {
  applyMiddleware,
  CombinedState,
  combineReducers,
  createStore,
  Store,
} from "redux";
import thunk from "redux-thunk";
import { layoutReducer } from "./layout";
import {
  LayoutState,
  SetLoadingAction,
  SetOpenAction,
  SetSelectedRouteAction,
} from "./layout/types";
import { loadState, persistLocalStorage } from "./middleware";

const rootReducer = combineReducers({
  layout: layoutReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

export default function (): Store<
  CombinedState<{ layout: LayoutState }>,
  SetOpenAction | SetSelectedRouteAction | SetLoadingAction
> {
  const persistedState: StoreState = loadState();
  const retval = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(persistLocalStorage, thunk),
  );
  return retval;
}
