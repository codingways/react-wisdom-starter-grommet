import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from './redux'
import NavigationRouter from './navigation/NavigationRouter'

import './App.css'

const store = createStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationRouter />
      </Provider>
    )
  }
}

export default App
