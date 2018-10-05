import { FETCH_BOOKS } from '../constants/ActionTypes';
import fetch from 'cross-fetch';

export default () => {
  return fetch('/books').then(res => res.json()).then(books => {
      {
        type: FETCH_BOOKS,
        books
      }
  })
};
