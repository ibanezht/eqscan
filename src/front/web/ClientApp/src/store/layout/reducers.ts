import {
  LayoutActionType,
  LayoutState,
  SET_DRAWER_OPEN,
  SET_LOADING,
  SET_SELECTED_ROUTE,
} from "./types";

const initialState: LayoutState = {
  drawerOpen: false,
  selectedRoute: "",
  loading: false,
};

export function layoutReducer(
  state = initialState,
  action: LayoutActionType,
): LayoutState {
  switch (action.type) {
    case SET_DRAWER_OPEN:
      return {
        ...state,
        drawerOpen: action.drawerOpen,
      };
    case SET_SELECTED_ROUTE:
      return {
        ...state,
        selectedRoute: action.selectedRoute,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}
