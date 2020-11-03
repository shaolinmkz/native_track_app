import { NavigationActions } from "react-navigation";

let _navigator;

export const setNavigator = (nav) => {
  _navigator = nav;
};

export const navigate = (routeName, params) => {
  if (_navigator) {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    );
  }
};
