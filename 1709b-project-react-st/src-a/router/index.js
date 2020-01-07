import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../views/Home'
import Cart from '../views/Cart'
import Detail from '../views/Detail'
import Login from '../views/Login'

/**
 * 
 * @param { 组件渲染的两种方式： }
 * @param {component , render} 
 * 
 * 区别： 优先级。 component 大于 render
 * 
 * 特点：
 * 1. 如果采用component 渲染组件的话。参数会自带三个属性：
 *   history:  跳转页面的
 *   location: 用来取参数
 *   match:    用来匹配路由的
 * 
 * 2. 如果采用render渲染组件的话，不会自己带上这三个参数：需要采用手动的方式，传递给
 * 要渲染的组件
 * 
 * 
 */

const RouterView = (props) => {
  console.log(props, 'props')
  return (
    <div>
      <Switch>

        { props.routes.map((item, index) => {
          return <Route key={index} path={item.path} component={item.component}></Route>
        }) }
        {/* <Route exact path='/home' component={Home} />
        <Route path='/cart' render={ props => <Cart {...props} ></Cart>  } />
        <Route path='/detail' component={Detail} />
        <Route path='/login' component={Login} />
        <Redirect to='/home'/> */}
        <Redirect to='/home'/>
     </Switch>
    </div>
  )
}

export default RouterView