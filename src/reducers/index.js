import { combineReducers } from 'redux';
import { getWeatherDataReducer } from './getWeatherData';
import { authenticationReducer } from './authenticationStatus';

export const rootReducer = combineReducers({
  weatherData: getWeatherDataReducer,
  authentication: authenticationReducer,
});
