import {
  START_RECORDING,
  STOP_RECORDING,
  ADD_LOCATION,
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


export default {
  startRecording,
  stopRecording,
  addLocation,
};
