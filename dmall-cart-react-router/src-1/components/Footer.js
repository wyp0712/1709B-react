import React from 'react';
import { NavLink } from 'react-router-dom'

const FooterBar = () => {
  return <div className='app-footer'>
    <NavLink to='/home/index'>首页</NavLink>
    <NavLink to='/home/cart'>购物车</NavLink>
  </div>
}

export default FooterBar;