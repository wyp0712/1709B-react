
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

// 无状态组件；
const RouterView = (props) => {
   const comArr = props.routes.filter(val => val.component);
   const redirArr = props.routes.filter(val => val.redirect);
  //  console.log(comArr)
  //  console.log(redirArr)
   return (
     <Switch>
       {
         comArr.map((item, index) => {
           return <Route key={index} path={item.path} render={props => {
             return <item.component  {...props} routes={item.children}></item.component>
           }}></Route>
         })
       }
       {
         redirArr.map((item, index) => {
            return <Redirect key={index} to={item.redirect}></Redirect>
         })
       }
     </Switch>
   )
}


export default RouterView;