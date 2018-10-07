import Book from '../Book/Book';
import './BookList.css';
import PropTypes from 'prop-types'
import React from 'react'

const BookList = ({ books, category }) => (
  <div className="pure-u-1-2 container">
    <h1>{books.length}</h1>
    <hr/>
    <span>{books[0].author}</span>
    <Book category={category} />
  </div>
)

BookList.propTypes = {
  books: PropTypes.array.isRequired,
}

export default BookList
