import { RECEIVE_DATA } from '../actions/data_actions';
import merge from 'lodash/merge';

const DataReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DATA:
      return merge({}, state, {[action.data.id]: action.data});
    default:
      return state;
  }
};

export default DataReducer;
