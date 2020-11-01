import trackerApi from "../api/trackerApi";
import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  AUTH_ERROR,
  SET_TOKEN,
  CLEAR_AUTH_ERROR,
} from "../actionTypes";
import { navigate } from "../utils/navigationRef";
import { localStore } from "../utils/localStorage";

const clearAuthError = (dispatch) => () => {
  dispatch({ type: CLEAR_AUTH_ERROR });
};

const signupAction = (dispatch) => (requestPayload) => {
  return trackerApi
    .post("/signup", requestPayload)
    .then(({ data: { data } }) =>
      localStore.save("token", data.token).then(() => {
        dispatch({ type: SIGNUP, payload: data.token });
        // navigate("trackListFlow");
        return data;
      })
    )
    .catch((error) => {
      dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
    });
};

const loginAction = (dispatch) => (requestPayload) => {
  return trackerApi
    .post("/login", requestPayload)
    .then(({ data: { data } }) =>
      localStore
        .save("token", data.token)
        .then(() => {
          dispatch({ type: LOGIN, payload: data.token });
          // navigate("trackListFlow");
          return data;
        })
    )
    .catch((error) => {
      dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
    });
};

const autoLoginUser = (dispatch) => async (pageLink) => {
  const token = await localStore.findOne("token");

  console.log("()()()(TOKEN)()()() =>", token);

  if (token) {
    dispatch({ type: SET_TOKEN, payload: token });
    navigate("trackListFlow");
  } else {
    navigate(pageLink);
  }
};

const logoutAction = (dispatch = async () => {
  const data = await localStore.removeOne("token");
  dispatch({ type: LOGOUT, payload: data });
  navigate("loginFlow");
});

export default {
  signupAction,
  loginAction,
  logoutAction,
  autoLoginUser,
  clearAuthError,
};
