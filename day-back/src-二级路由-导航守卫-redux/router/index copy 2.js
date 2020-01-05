import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

const RouterView = (props) => {
  return (
    <Switch>
      {
        props.routes.map((item, index) => {
          return (
            <Route  key={index} path={item.path} render={(props) => {
              console.log(props, 'props')
              console.log(item)
              if (item.children) {
               return <item.component {...props} routes={item.children}></item.component>
              } else {
               return <item.component {...props} />
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