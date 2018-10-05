import { FETCH_BOOKS } from '../constants/ActionTypes';

const defaultState = {
  books: [],
}

export default (action = FETCH_BOOKS, state = defaultState) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: state.books
      };
    default:
      return defaultState
  }
}
