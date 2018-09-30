import React, { Component } from 'react'
import './EmptyBook.css'

const form = (
  <form class="pure-form pure-form-stacked modal" id="modal">
    <fieldset>
      <input type="text" placeholder="Título" />
      <input type="text" placeholder="Autor" />
      <input type="text" placeholder="Descrição" />

      <button type="submit" class="pure-button pure-button-primary">Adicionar</button>
    </fieldset>
  </form>
)

export default class EmptyBook extends Component {

  componentDidMount(){
    require('./EmptyBookJS.js');
  }

  render() {
    return (
    <div>
      <div class="card" id="modal-control">
        <img src="https://via.placeholder.com/150x250" alt="add a new book"></img>
      </div>
      {form}
    </div>
    )
  }
}
