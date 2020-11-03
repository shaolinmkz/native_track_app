import { START_RECORDING, STOP_RECORDING, ADD_LOCATION } from "../actionTypes";

export const initialState = {
  isRecording: false,
  coordinates: [],
  locations: [],
  currentLocation: null,
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
    default:
      return state;
  }
};
