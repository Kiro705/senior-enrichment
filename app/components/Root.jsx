import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import store from '../store';

export default class Root extends Component {

  render () {
    return (
      <div>
        <Navbar />
        <main>
          
        </main>
      </div>
      )
  }
}