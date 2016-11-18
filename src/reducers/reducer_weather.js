import { FETCH_WEATHER } from '../actions/index';

export default function(state=[],action) {

  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payLoad.data, ...state ]; //create a new object with the old and new values
  }

  return state;
}
