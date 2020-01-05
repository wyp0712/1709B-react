import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class componentName extends Component {
  render() {
    return (
      <div className="app-footer">
        <NavLink to='/home'>首页</NavLink>
        <NavLink to='/classify'>分类</NavLink>
        <NavLink to='/cart'>购物车</NavLink>
        <NavLink to='/mine'>我的</NavLink>
      </div>
    )
  }
}
