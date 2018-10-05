import './BookList.css';
import React, {Component} from 'react'
import fetchBooks from '../../actions/BookListActions';
import {connect} from 'react-redux'
import BookList from './BookList.js';
import PropTypes from 'prop-types'

class BookListContainer extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

componentDidMount() {
    fetchBooks();
  }

  render() {
    const {books} = this.props;
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
    fetchBooks: () => dispatch(fetchBooks())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookListContainer)
