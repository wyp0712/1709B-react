import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class componentName extends Component {
  render() {
    return (
      <div className="app-footer">
        <NavLink to='/book'>书架</NavLink>
        <NavLink to='/store'>书店</NavLink>
        <NavLink to='/find'>找书</NavLink>
        <NavLink to='/mine'>我的</NavLink>
      </div>
    )
  }
}
