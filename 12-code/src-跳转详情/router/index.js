import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export default (props) => {
  return (
    <Switch>
      {
        props.routes.map((item, index) => {
          return (
            <Route key={index} path={item.path} component={item.component}></Route>
          )
        })
      }
      <Redirect to='/home'/>
    </Switch>
  )
}