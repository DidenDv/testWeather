import { GET_WEATHER_ERROR, GET_WEATHER_LOADED, GET_WEATHER_LOADING } from '../constants/constants';

const initialState = {
  error: null,
  isLoading: null,
  isLoaded: false,
  data: null,
};

export function getWeatherDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_LOADING: {
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
      };
    }

    case GET_WEATHER_LOADED: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: [action.payload],
      };
    }

    case GET_WEATHER_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    }

    default:
      return state;
  }
}
