import React, { Component,Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <NavLink to='/home/index'>首页</NavLink>
        <NavLink to='/home/cart'>购物车</NavLink>
      </Fragment>
    )
  }
}
