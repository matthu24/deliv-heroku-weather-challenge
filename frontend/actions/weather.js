import {fetchWeather} from '../utils/weather';

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const RECEIVE_ZIP = 'RECEIVE_ZIP';

const receiveWeather = (weather) => ({
  type: RECEIVE_WEATHER,
  weather
})

const receiveZip = zip => ({
  type: RECEIVE_ZIP,
  zip
})

export const storeZip = zip => dispatch => {
  dispatch(receiveZip(zip))
}

export const fetchAllWeather = (zip) => dispatch => {
  fetchWeather(zip)
    .then(result => result.json())
    .then(weather => dispatch(receiveWeather(weather)))
}
