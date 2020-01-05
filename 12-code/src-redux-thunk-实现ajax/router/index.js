import { Switch, Redirect, Route } from 'react-router-dom'
import React from 'react'

/* 每一个Route就是一个页面  */
/* 配置二级路由， 不能出现 exact  / */
/* 组件 <Route path="/home" compponent={home}></Route> */
/* 渲染 <Route path="/cart" render={ props => {
} }  */

/**
 * 
 * @param {RouterGuard} 导航守卫组件：进入判断登陆与否
 * 
 */

const RouterGuard = (props) => {
  const { component: Component, ...otherProps } = props;
  return (
    <Route {...otherProps} render={props => {
      return ( // true: cart组件 false: 
        localStorage.getItem('token') ?
          <Component {...props} /> :
          <Redirect to='/login' />
      )
    }} />
  )
}

/* props:  config  props: history match:path */
const RouterView = (props) => {
  return (
    <Switch>
      {
        props.routes.map((item, index) => {
          return (  
            // component={}  render={}
            <Route key={index} path={item.path} render={props => {
              if (item.children) { // 有二级路由 就传递给组件内部 重新走一遍RouterView组件最终渲染的的逻辑都走了else
                // console.log(props, 'props-------------------item' )
                return <item.component {...props} routes={item.children} />
              } else { // 渲染一级
                if (item.requireAuth) {
                  // 需要守卫   // true: cart false:   
                  return <RouterGuard {...item} {...props} />
                  // return <item.component {...props} />
                } else {
                  // 直接渲染
                  return <item.component {...item} {...props} />
                }
              }
            }} />
          )
        })
      }
      {props.match && <Redirect to={`${props.match.path}`} />}
    </Switch>
  )
}

export default RouterView
