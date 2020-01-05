import React from 'react'
import { Switch,Route, Redirect } from 'react-router-dom'

const RouterView = (props) => {
  const routes = props.routes.filter(v => v.component)
  const redirectArr = props.routes.filter(v => v.redirect)
  return (
    <Switch>
      {
        routes.map((item, index) => {
          return (
            <Route key={index} path={item.path}  render={props => {
               return <item.component  {...props} routes={item.children} />   
            }} />
          )
        })
      }
      {
        redirectArr.map((val, index) => {
          return <Redirect key={index} to={val.redirect}/> 
        })
      }
    </Switch>
  )
}

export default RouterView;