
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const RouterView = (props) => {
  // console.log(props, 'props')
   // 过滤 1. 组件  2. 重定向
   const RouteCom = props.routes.filter(val => val.com);
   const RedirectArr = props.routes.filter(val => val.redirect)
   console.log(RedirectArr, 'RedirectArr')
  return (
    <Switch>
      {
        RouteCom.map((item, index) => {
          return <Route key={index} path={item.path} render={ props => {
                 return <item.com {...props} routes={item.children}></item.com>                
          }}></Route>
        })
      }
      {
        RedirectArr.map((item, index) => {
          // console.log(item, 'item-----')
          return <Redirect key={index} to={item.redirect}></Redirect> 
        })
      }
    </Switch>
  )

}

export default RouterView