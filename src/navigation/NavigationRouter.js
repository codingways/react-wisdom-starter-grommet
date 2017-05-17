import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import AppContainer from '../containers/AppContainer'

export default class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Route exact path="/" component={AppContainer}/>
      </Router>
    )
  }
}