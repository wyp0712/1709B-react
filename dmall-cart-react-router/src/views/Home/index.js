import React, { Component } from 'react'
import RouterView from '../../router/index'

import FooterBar from '../../components/Footer'

export default class componentName extends Component {
  render() {
    return (
      <div className='app-home-index'>
        <header className='header'>header</header>
        <main className='main'>
          <RouterView routes={this.props.routes} />
        </main>
        <footer className='footer'>
          <FooterBar />
        </footer>
      </div>
    )
  }
}
