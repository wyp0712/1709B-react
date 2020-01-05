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


        <button onClick={ () => { this.props.history.push('/detail/1') } }>跳转到detail页面</button>


        <button onClick={ () => { this.props.history.push({
          pathname: '/home?id=1',
        }) } }>跳转到home页面</button>
        
        <RouterView redirect='/cart/info' {...this.props} routes={this.props.routes} />
      </div>
    )
  }


}
