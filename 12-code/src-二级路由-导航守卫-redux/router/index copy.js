import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

//模拟接口
const auth={
  isLogin:false,
  login(callback){
     this.isLogin=true
     setTimeout(callback,1000) 
  }
}

//编写路由守卫组件进行权限控制
class RouteGuard extends Component{
  // state={
  //     isLogin:true
  // }
  render(){
    const { component: Component, ...otherProps}=this.props
    return (
        <Route {...otherProps} render={props=>(
          auth.isLogin?
          <Component {...props} />
          :
          (
            <Redirect to={
                {pathname:'/login',state:{from:props.location.pathname}}
            } />
          )
        )} />
    )
  }
}

const RouterView = (props) => {
  // console.log(props.routes, 'props')
  return (
    <Switch>
        {
          props.routes.map((item, index) => {
            console.log(item.requireAuth)
           return (
                    item.requireAuth ?
                    <RouteGuard key={index} path={item.path} component={item.component} />
                    :
                    <Route key={index} path={item.path} component={item.component} />
                  )
          })
        }
      <Redirect to="/home"/>
    </Switch>
  )
}

export default RouterView;