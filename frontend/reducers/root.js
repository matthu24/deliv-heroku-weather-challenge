import {combineReducers} from 'redux';
import WeatherReducer from './weather_reducer';
import ZipReducer from './zip_reducer';

export default combineReducers({
  weather: WeatherReducer,
  zip: ZipReducer
})
