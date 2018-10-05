import Book from '../Book/Book';
import './BookList.css';
import React, { Component } from 'react'

export default class BookList extends Component {
  render() {
    return (
      <div className="pure-u-1-2 container">
        <h1>{"users"}</h1>
        <hr/>
        <Book/>
      </div>
    )
  }
}
