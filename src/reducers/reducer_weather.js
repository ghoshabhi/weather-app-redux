import { FETCH_WEATHER, EMPTY_SEARCH_ERROR } from '../actions/index';

export default function(state=[],action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; //create a new object with the old and new values
    case EMPTY_SEARCH_ERROR:
      return {};
  }
  return state;
}
