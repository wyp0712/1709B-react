import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    return (
      <div>
        Detail
      </div>
    )
  }

  componentDidMount() {
    // 动态路由获取参数  在match中params中获取参数
    console.log(this.props, 'props')
  }
}
