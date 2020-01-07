import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class componentName extends Component {
  render() {
    return (
      <div>
        footer
        <NavLink to='/'>首页</NavLink>
        <NavLink to='/cart/tab2'>购物车</NavLink>
        <NavLink to='/cart/tab1'>登陆</NavLink>
      </div>
    )
  }
}
