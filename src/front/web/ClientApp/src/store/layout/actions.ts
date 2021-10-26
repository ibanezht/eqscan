import { Dispatch } from "redux";
import { SET_DRAWER_OPEN, SET_LOADING, SET_SELECTED_ROUTE } from "./types";

export function setDrawerOpen(drawerOpen: boolean) {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: SET_DRAWER_OPEN,
      drawerOpen,
    });
  };
}

export function setSelectedRoute(selectedRoute: string) {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: SET_SELECTED_ROUTE,
      selectedRoute,
    });
  };
}

export function setLoading(loading: boolean) {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: SET_LOADING,
      loading,
    });
  };
}
