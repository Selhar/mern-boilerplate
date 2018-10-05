import './BookList.css';
import React from 'react'
import { FETCH_BOOKS } from '../../constants/ActionTypes';
import {connect} from 'react-redux'
import BookList from './BookList.js';

const BookListContainer = ({fetchBooks, books}) => {
  return (
    <BookList onClick={fetchBooks} />
  )
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
