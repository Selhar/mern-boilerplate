import fetch from 'cross-fetch';

export default (action, state) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return fetch('/users').then( res => { return res.json(); } );
    default:
      return state
  }
}
