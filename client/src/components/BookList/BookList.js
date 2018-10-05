import Book from '../Book/Book';
import './BookList.css';
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import fetch from 'cross-fetch';


export default class BookList extends Component {
  render() {
    return (
      <div className="pure-u-1-2 container">
        <h1>{category}</h1>
        <h1>{"users"}</h1>
        <hr/>
        <Book category={category} />
      </div>
    )
  }
}
