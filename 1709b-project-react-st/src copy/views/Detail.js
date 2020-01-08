import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div>
        Detail

        <button onClick={ () => { this.props.history.go(-1) } }>back</button>

        { console.log(this.props, '我是详情页面') }
      </div>
    )
  }

  componentWillMount() {

    let id = this.props.location.state;
    console.log(id, 'id')
  }
}
