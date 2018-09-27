import EmptyBook from '../EmptyBook/EmptyBook';
import './BookList.css';
import React, { Component } from 'react'

export default class BookList extends Component {
  render() {
    return (
      <div class="pure-u-1-2 container">
        <h1>adicionar props</h1>
        <hr/>
        <EmptyBook/>
      </div>
    )
  }
}
