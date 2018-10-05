import { FETCH_BOOKS } from '../constants/ActionTypes';

const defaultState = {
  books: [],
}

export default (action = FETCH_BOOKS, state = defaultState) => {
  switch (action.type) {
    case FETCH_BOOKS:
      fetch('/users')
      .then(res => res.json())
      .then(books => {
        return {
          ...state,
          books: books
        }
      });
    default:
      return defaultState
  }
}
