import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div>
        Detail

        { console.log(this.props, '我是详情页面') }
      </div>
    )
  }

  componentWillMount() {

    let id = this.props.location.state;
    console.log(id, 'id')
  }
}
