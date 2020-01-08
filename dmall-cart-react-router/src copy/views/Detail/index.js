import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div>
        detail
      </div>
    )
  }

  componentDidMount() {
    console.log(this.props.location, 'location')
  }
}
