import React, { Component } from 'react'
import { NavLink  } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink to='/home'>首页</NavLink> |
        <NavLink to='/cart'>购物车</NavLink> |
        <NavLink to='/detail'>详情页面</NavLink> |
        <NavLink to='/login'>登陆</NavLink> 
      </div>
    )
  }
}
