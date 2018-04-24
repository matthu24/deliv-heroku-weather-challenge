import {RECEIVE_ZIP} from '../actions/weather';
import merge from 'lodash/merge';


export default (state={},action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ZIP:
      return action.zip
    default:
      return state;

  }
}
