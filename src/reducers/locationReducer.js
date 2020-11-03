import {
  START_RECORDING,
  STOP_RECORDING,
  ADD_LOCATION,
  CREATE_TRACK,
  GET_TRACKS,
  GET_TRACK,
  DELETE_TRACK,
} from "../actionTypes";

export const initialState = {
  isRecording: false,
  coordinates: [],
  locations: [],
  currentLocation: null,
  tracks: [],
  track: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_LOCATION: {
      const others = {};
      if (state.isRecording) {
        others.locations = [...state.locations, payload];
      }

      return {
        ...state,
        currentLocation: payload,
        coordinates: [
          ...state.locations,
          {
            longitude: payload?.coords?.longitude,
            latitude: payload?.coords?.latitude,
          },
        ],
        ...others,
      };
    }
    case START_RECORDING:
      return {
        ...state,
        isRecording: true,
      };
    case STOP_RECORDING:
      return {
        ...state,
        isRecording: false,
      };
    case CREATE_TRACK:
      return {
        ...state,
        locations: [],
        coordinates: [],
        tracks: [payload, ...state.tracks],
      };
    case GET_TRACKS:
      return {
        ...state,
        tracks: payload,
      };
    case GET_TRACK:
      return {
        ...state,
        track: payload,
      };
    case DELETE_TRACK:
      return {
        ...state,
        tracks: state.tracks.filter((data) => data._id !== payload),
      };
    default:
      return state;
  }
};
