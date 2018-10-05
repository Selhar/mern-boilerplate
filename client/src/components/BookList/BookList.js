import Book from '../Book/Book';
import './BookList.css';
import PropTypes from 'prop-types'
import React from 'react'

const BookList = ({ books, category }) => (
  <div className="pure-u-1-2 container">
    <h1>asd</h1>
    <hr/>
    <span>{books ? books[0].author : books}</span>
    <Book category={category} />
  </div>
)

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  fetchBooks: PropTypes.func.isRequired,
}

export default BookList
