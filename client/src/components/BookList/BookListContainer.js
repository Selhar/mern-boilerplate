import './BookList.css';
import React, {Component} from 'react'
import fetchBooks from '../../actions/BookListActions';
import {connect} from 'react-redux'
import BookList from './BookList.js';

class BookListContainer extends Component {
  componentDidMount() {
    fetchBooks();
  }

  render() {
    return (
      <BookList />
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(fetchBooks())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookListContainer)
