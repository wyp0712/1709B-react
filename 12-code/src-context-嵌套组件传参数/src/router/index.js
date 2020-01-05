import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../views/Home'
import Cart from '../views/Cart'
import FooterBar from '../components/FooterBar'

class ReactRouter extends Component {
  render() {
    return (
      <div className="app-router">
        {/* 当url和多个Route匹配时候，这些Route都会执行渲染操作。如果指只想让第一个匹配的Route渲染，那么可以把
          这些Router包到一个Switch组件中。如果想让url和Route完成匹配，Route才渲染，那么可以使用
          Route的exact属性。Switch和exact常常联合使用，用于应用首页的导航。
        */}
          <Switch>
            <Route exact path="/" component={Home} ></Route>
            <Route path="/cart" component={Cart} ></Route>
          </Switch>
      </div>
    )
  }
}

export default ReactRouter;
