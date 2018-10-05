import Book from '../Book/Book';
import './BookList.css';
import PropTypes from 'prop-types'
import React from 'react'

const BookList = ({ books, fetchBooks }) => (
  <div className="pure-u-1-2 container">
    <h1 onClick={fetchBooks}>asd</h1>
    <hr/>
    <span>{books ? books[0].author : "no books"}</span>
    <Book/>
  </div>
)

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  fetchBooks: PropTypes.func.isRequired,
}

export default BookList
