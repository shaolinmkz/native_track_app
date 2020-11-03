import trackerApi from "../api/trackerApi";
import {
  START_RECORDING,
  STOP_RECORDING,
  ADD_LOCATION,
  CREATE_TRACK,
  GET_TRACKS,
  GET_TRACK,
  DELETE_TRACK,
} from "../actionTypes";


const startRecording = (dispatch) => () => {
  dispatch({ type: START_RECORDING })
}

const stopRecording = (dispatch) => () => {
  dispatch({ type: STOP_RECORDING })
}

const addLocation = (dispatch) => (payload) => {
  dispatch({ type: ADD_LOCATION, payload })
}

const createTrack = (dispatch) => async (payload) => {
  try{
    const { data: { data } } = await trackerApi.post('/tracks', payload);
    dispatch({ type: CREATE_TRACK, payload: data });
    return data;
  } catch (err) {
    return err
  }
}

const getTracks = (dispatch) => async () => {
  try{
    const { data: { data } } = await trackerApi.get('/tracks');
    dispatch({ type: GET_TRACKS, payload: data });
    return data;
  } catch (err) {
    return err
  }
}

const getTrack = (dispatch) => async (id) => {
  try{
    const { data: { data } } = await trackerApi.get(`/tracks/${id}`);
    dispatch({ type: GET_TRACK, payload: data });
    return data;
  } catch (err) {
    return err
  }
};

const deleteTrack = (dispatch) => async (id) => {
  try{
    await trackerApi.delete(`/tracks/${id}`);
    dispatch({ type: DELETE_TRACK, payload: id });
    return data;
  } catch (err) {
    return err
  }
}


export default {
  startRecording,
  stopRecording,
  addLocation,
  createTrack,
  getTracks,
  getTrack,
  deleteTrack,
};
