import axios from 'axios';
import {
  currentCity,
  GET_WEATHER_ERROR,
  GET_WEATHER_LOADED,
  GET_WEATHER_LOADING,
  openWeatherApiKey
} from '../constants/constants';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/';

export function getCityWeather() {
  return dispatch => {
    dispatch({
      type: GET_WEATHER_LOADING,
    });
    axios
      .post(`weather?q=${currentCity}&lang=ru&units=metric&APPID=${openWeatherApiKey}`)
      .then(response => {
        dispatch({
          type: GET_WEATHER_LOADED,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_WEATHER_ERROR,
          payload: error,
          error: true,
        });
      });
  };
}
