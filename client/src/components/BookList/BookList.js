import Book from '../Book/Book';
import './BookList.css';
import React, { Component } from 'react'
import PropTypes from 'prop-types';

class BookList extends Component {
  render() {
    const { category } = this.props;

    return (
      <div className="pure-u-1-2 container">
        <h1>{category}</h1>
        <hr/>
        <Book category={category} />
      </div>
    )
  }
}

BookList.propTypes = {
  category: PropTypes.string.isRequired,
}

export default BookList;
