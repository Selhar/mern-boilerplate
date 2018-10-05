import { FETCH_BOOKS } from '../constants/ActionTypes';
import fetch from 'cross-fetch'
​
const fetch_books = (books) => {
  return{
    type: FETCH_BOOKS,
    books
  }
};

export default fetch_books;
