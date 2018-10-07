import BookListContainer from '../BookList/BookListContainer'
import React, { Component } from 'react'
import './pure.css'
import './Home.css';

export default class Home extends Component {
  render() {
    const lists = ['interested', 'reading', 'read'].map( (category) => {
      return <BookListContainer category={category} />
    });
    return (
      <div>
        <div className="pure-g">
          {lists}
        </div>
      </div>
    )
  }
}
