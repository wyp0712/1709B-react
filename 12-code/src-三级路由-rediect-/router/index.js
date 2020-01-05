import { Switch, Redirect, Route} from 'react-router-dom'
import React from 'react'

/* 每一个Route就是一个页面  */
/* 配置二级路由， 不能出现 exact  / */
/* 组件 <Route path="/home" compponent={home}></Route> */
/* 渲染 <Route path="/cart" render={ props => {
} }  */

/**
 * 
 * @param {RouterGuard} 导航守卫组件：进入判断登陆与否
 */

const RouterGuard = (props) => {
  const {component: Component, ...otherProps  } = props;
  return (
    <Route {...otherProps} render={props => {
      return ( // true: cart组件 false: 
        localStorage.getItem('token') ?
        <Component {...props}/> :
        <Redirect to='/login'/>
      )
    }}/>
  )
}
/* props:  config  props: history match location */
const RouterView = (props) => {
  return (
    <Switch>
      {
        props.routes.map((item, index) => {
          return (
            <Route key={index} path={item.path}  render={props => {
              return <item.component {...props} routes={item.children}  /> 
            }}/>
          )
        })
      }
      { props.match ?  <Redirect to={props.redirect} /> : <Redirect  to="/home" /> }
    </Switch>
  )
}

export default RouterView
