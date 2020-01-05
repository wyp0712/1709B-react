import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FooterBar extends Component {
  render() {
    return <div>
      <Link to="/">首页</Link>
      <Link to="/cart">购物车</Link>
    </div>
  }
}

export default FooterBar