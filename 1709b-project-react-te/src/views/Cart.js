import React, { Component } from 'react'

import RouterView from '../router/index'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default class componentName extends Component {
  render() {
    return (
      <div>
        Cart
        <Header />
         <RouterView routes={this.props.routes}/>
        <Footer />
      </div>
    )
  }
}
