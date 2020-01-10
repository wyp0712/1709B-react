import React from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'

const RouterView = (props) => {
  const comsArr = props.routes.filter(val => val.com);
  const redirectArr = props.routes.filter(val => val.redirect);

  return (
    <Switch>
      {
        comsArr.map((item, index) => {
          return <Route key={index} path={item.path} render={ props => {
            return <item.com {...props} routes={item.children}></item.com>
          } }></Route>
        })
      }
      {
        redirectArr.map((item, index) => {
          return <Redirect key={index} to={item.redirect}></Redirect>
        })
      }
    </Switch>
  )
}

export default RouterView;