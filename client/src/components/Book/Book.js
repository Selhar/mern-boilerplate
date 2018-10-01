import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';

class Book extends Component {
  componentDidMount(){
    require('./BookJS');
  }

  render() {
    const { category } = this.props;

    return (
    <div>
      <div className="card" id="modal-control">
        <img src="https://via.placeholder.com/150x250" alt="add a new book"></img>
      </div>
      <form className="pure-form pure-form-stacked modal" id="modal" method="post" action="/users">
        <fieldset>
          <input type="text" placeholder="Título" name="title" />
          <input type="text" placeholder="Autor" name="author"/>
          <input type="text" placeholder="Descrição" name="description" />
          <input type="hidden" name="category" value={category} />
          <button type="submit" className="pure-button pure-button-primary" id="btnAddBook">Adicionar</button>
        </fieldset>
      </form>
    </div>
    )
  }
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
}

export default Book;
