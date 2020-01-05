import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export default (props) => {
  return (
    <div className="app-footer">
      <NavLink to='/home/tab1'>首页</NavLink>
      <NavLink to='/cart'>购物车</NavLink>
      <NavLink to='/classify'>购物车</NavLink>
    </div>
  )
}