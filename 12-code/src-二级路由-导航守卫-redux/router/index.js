import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

const auth = {
  isLogin: false
}

const RouterGuard = (props) => {

  const { component: Component, ...otherProps } = props
  console.log(Component, otherProps)

  return (
    <Route {...otherProps} render={ props => {
      return (
        auth.isLogin ?
        <Component {...props} /> :
        <Redirect to='/login' {...props}/>
      )  
    }} />
  )

}

const RouterView = (props) => {
  // console.log(props, 'props')
  return (
    <Switch>
      {
        props.routes.map((item, index) => {
          return (
            <Route key={index} path={item.path} render={ props => {
               if (item.children) {
                 return <item.component {...props} routes={item.children}/>
               } else {
                 // 判断是否需要守卫
                 if (item.requireAuth) {
                   return <RouterGuard {...item} {...props}/>
                 } else {
                   return <item.component {...props}/>
                 }
               }
            }}  />
          )
        })
      }

    </Switch>
  )
}

export default RouterView;