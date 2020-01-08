import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import RouterView from '../../router/index'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <header>猫眼电影</header>
        {/* 二级路由 */}
        <NavLink to='/home/index'>正在上映</NavLink> |
        <NavLink to='/home/cat'>即将上映</NavLink>

        <RouterView routes={this.props.routes}></RouterView>
      </div>
    )
  }
}
