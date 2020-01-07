import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div>
        购物车
        { '我是cart页面:'+ console.log(this.props) }
      </div>
    )
  }
}
