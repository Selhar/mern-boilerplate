import React, { Component } from 'react'
import './EmptyBook.css';
import '../../utils/generic.css'

export default class EmptyBook extends Component {

  componentDidMount(){
    require('../../utils/generic.js');
  }

  render() {
    return (
    <div>
      <div class="card" id="modal-control">
        <img src="https://via.placeholder.com/150x250" alt="add a new book"></img>
      </div>
      <form class="pure-form modal" id="modal">
        <fieldset>
          <legend>A compact inline form</legend>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <label for="remember">
            <input id="remember" type="checkbox" /> Remember me
          </label>

          <button type="submit" class="pure-button pure-button-primary">Sign in</button>
        </fieldset>
      </form>
    </div>
    )
  }
}
