import React, { Component } from 'react'
import RouterView from '../../../router/index';
import { NavLink } from 'react-router-dom'
export default class CartTab2 extends Component {
  render() {
    return (
      <div>
         <h2>user --- 页面</h2>
          
          <NavLink to='/cart/user/tab1'>tab1</NavLink> | 
          <NavLink to='/cart/user/tab2'>tab2</NavLink>
         <RouterView redirect='/cart/user/tab1' {...this.props}  routes={this.props.routes} /> 
      </div>
    )
  }
}
