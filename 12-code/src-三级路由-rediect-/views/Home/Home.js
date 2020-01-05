import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div>
        home
      </div>
    )
  }

  componentDidMount() {
    console.log(this.props, 'home----props')
  }
}
