import React, { Component } from 'react'
import RouterView from '../../router/index'
import FooterBar from '../../components/FooterBar'
import HeaderBar from '../../components/Header'

export default class componentName extends Component {
  render() {
    return (
      <div className='home-index'>
        <header className='home-header'>
          <HeaderBar />
        </header>
        <main className='home-main'>
          <RouterView routes={this.props.routes} />
        </main>
        <footer className='home-footer'>
         <FooterBar />
        </footer>
      </div>
    )
  }
}
