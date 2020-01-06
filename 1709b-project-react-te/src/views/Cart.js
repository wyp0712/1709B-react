import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div>
        Cart
        { console.log(this.props, 'props') }
      </div>
    )
  }
}
