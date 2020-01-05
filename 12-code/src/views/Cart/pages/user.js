import React, { Component } from './node_modules/react'
import RouterView from '../../../router/index';
import { NavLink } from './node_modules/react-router-dom'
export default class CartTab2 extends Component {
  render() {
    return (
      <div>
        <NavLink to='/cart/user/tab1'>tab1</NavLink> |
        <NavLink to='/cart/user/tab2'>tab2</NavLink>
        <RouterView redirect="/cart/user/tab1" {...this.props} routes={this.props.routes}/>
      </div>
    )
  }
}
