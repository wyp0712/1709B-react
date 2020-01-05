import React, { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Cart from '../views/Cart'

class RouterApp extends Component {
  render() {
    return <div className="App-router">
       <nav>
         <Link to="/" >首页</Link>
         <Link to="/cart">购物车</Link>
       </nav>
        {/* 路由配置 */}
       <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/cart" component={Cart}></Route>
       </Switch>
      </div>
  }
}

export default RouterApp