import React, { Component } from 'react'

import RouterView from '../router/index';
import NavBar from '../components/NavBar'

export default class componentName extends Component {

  render() {
    return (
      <div className='home-page'>
        <div className='header'></div>
        <main className='main'>
          <RouterView  routes={this.props.routes} />
        </main>
        <div className='footer'>
          <NavBar />
        </div>
      </div>
    )
  }

  componentDidMount() {

  }
}
