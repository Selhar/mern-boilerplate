import './BookList.css';
import React, {Component} from 'react'
import addBooksToState from '../../actions/BookListActions';
import {connect} from 'react-redux'
import fetch from 'cross-fetch';
import BookList from './BookList.js';

class BookListContainer extends Component {
  componentDidMount() {

  const { addBooksToState } = this.props;
    fetch('/books')
    .then(res => res.json())
    .then(books => {
      addBooksToState(books);
    });
  }

  render() {
    const {category, books} = this.props;
    return (
      <BookList books={books}/>
    )
  }
}

const mapStateToProps = state => {
  const { books } = state;
  return books;
}

const mapDispatchToProps = dispatch => {
  return {
    addBooksToState: books => dispatch(addBooksToState(books))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookListContainer)
