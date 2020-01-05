import React, { Component } from 'react'
import RouterView from '../../router/index'
import { NavLink } from 'react-router-dom'

export default class componentName extends Component {
  
  state = {
    flag: '/cart/info/tab1'
  }

  render() {
    return  (
      <div>
        <h1>购物车页面</h1>
        <NavLink to='/cart/info'>info</NavLink> |
        <NavLink to='/cart/user'>user</NavLink>
        <hr />

        <RouterView redirect='/cart/info' {...this.props} routes={this.props.routes} />
      </div>
    )
  }
}
