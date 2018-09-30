import BookList from '../BookList/BookList'
import React, { Component } from 'react'
import './pure.css'
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="pure-g">
          <BookList category="reading"/>
        </div>
      </div>
    )
  }
}
