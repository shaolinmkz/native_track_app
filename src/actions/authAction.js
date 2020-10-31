import AsyncStorage from "@react-native-community/async-storage";
import trackerApi from "../api/trackerApi";
import { LOGIN, SIGNUP, LOGOUT, AUTH_ERROR } from "../actionTypes";
import { navigate } from '../utils/navigationRef';

const signupAction = (dispatch) => (requestPayload) => {
  dispatch({ type: AUTH_ERROR, payload: "" });
  return trackerApi
    .post("/signup", requestPayload)
    .then(({ data: { data } }) => {
      AsyncStorage.setItem("token", data.token).then(() => {
        dispatch({ type: SIGNUP, payload: data });
        navigate('TrackListScreen');
      }).catch(err => err);;
    })
    .catch((error) => {
      dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
    });
};

const loginAction = (dispatch) => (requestPayload) => {
    dispatch({ type: AUTH_ERROR, payload: "" });
    return trackerApi
      .post("/login", requestPayload)
      .then(({ data: { data } }) => {
        AsyncStorage.setItem("token", data.token).then(() => {
          dispatch({ type: LOGIN, payload: data });
          navigate('TrackListScreen');
        }).catch(err => err);
      })
      .catch((error) => {
        dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
      });
  };

const logoutAction = (dispatch) => {
  return () => {
    dispatch({ type: LOGOUT });
  };
};

export default {
  signupAction,
  loginAction,
  logoutAction,
};
