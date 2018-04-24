import {RECEIVE_WEATHER} from '../actions/weather';
import merge from 'lodash/merge';


export default (state={},action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_WEATHER:
      return merge({},state,action.weather)
    default:
      return state;

  }
}
