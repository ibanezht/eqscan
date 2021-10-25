export const SET_DRAWER_OPEN = "SET_DRAWER_OPEN";
export const SET_SELECTED_ROUTE = "SET_SELECTED_ROUTE";
export const SET_LOADING = "SET_LOADING_ACTION";

export interface LayoutState {
  drawerOpen: boolean;
  selectedRoute: string;
  loading: boolean;
}

export interface SetOpenAction {
  type: typeof SET_DRAWER_OPEN;
  drawerOpen: boolean;
}

export interface SetSelectedRouteAction {
  type: typeof SET_SELECTED_ROUTE;
  selectedRoute: string;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
  loading: boolean;
}

export type LayoutActionType =
  | SetOpenAction
  | SetSelectedRouteAction
  | SetLoadingAction;
