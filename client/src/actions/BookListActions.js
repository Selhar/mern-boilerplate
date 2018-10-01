import * as types from '../constants/ActionTypes';

const fetchBooks = ( books ) => ({
  type: types.FETCH_BOOKS,
  books
});

export default fetchBooks;
