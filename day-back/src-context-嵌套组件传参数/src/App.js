import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactRouter from './router/index'
import FooterBar from './components/FooterBar'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ReactRouter />
        <FooterBar />
      </BrowserRouter>
      )
  }
}

export default App;