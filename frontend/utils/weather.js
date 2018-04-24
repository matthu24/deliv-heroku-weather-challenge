import axios from 'axios';
export const fetchWeather = (zip) => {
  const API_KEY = '5ab0e54f94cd4b682ebe2cdb1675cc56';
  const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
  const url = `${ROOT_URL}&zip=${zip},us&units=imperial`;
  return axios.get(url);
}
