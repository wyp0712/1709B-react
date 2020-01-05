import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

const auth = {
  isLogin: false,
}

/** 路由组件  路由渲染 同时存在，路由渲染会被忽略  */
const RouteGuard = (props) => {
  const { component: Component, ...otherProps } = props
  return (
    <Route {...otherProps}  render={ props => {
     return (
        auth.isLogin ?
        <Component {...props} /> :
        <Redirect to='/login' {...props} />
      )
    }} />
  )
}

const RouterView = (props) => {
  return (
    <Switch>
      {
        props.routes.map((item, index) => {
          return (
            <Route  key={index} path={item.path} render={(props) => {
              if (item.children) {
               return <item.component {...props} routes={item.children}></item.component>
              } else {
                if (item.requireAuth) {
                  return <RouteGuard {...item} {...props}/>
                } else {
                  return <item.component {...props}/> 
                }
              }
            }} />
          )
        })
      }
      <Redirect to='/home'/>
    </Switch>
  )
}

export default RouterView;