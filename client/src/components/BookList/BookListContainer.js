import './BookList.css';
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FETCH_BOOKS } from '../constants/ActionTypes';
import fetch from 'cross-fetch';
import BookList from './BookList.js';

class BookListContainer extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    teste: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const books = fetch('/users')
      .then(res => res.json())
      .then(users => {this.setState({ users }); console.log(users)});
  }

  render() {
    return (
      <BookList books={books} />
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(FETCH_BOOKS())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookListContainer)
