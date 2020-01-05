import { Switch, Redirect, Route} from 'react-router-dom'
import React from 'react'

/* 每一个Route就是一个页面  */
/* 配置二级路由， 不能出现 exact  / */
/* 组件 <Route path="/home" compponent={home}></Route> */
/* 渲染 <Route path="/cart" render={ props => {
} }  */

const RouterView = (props) => {
  return (
    <Switch>
      {
        props.routes.map((item, index) => {
          return (
            <Route key={index} path={item.path}  render={props => {
              if (item.children) { // 有二级路由 就传递给组件内部 重新走一遍RouterView组件最终渲染的的逻辑都走了else
                return <item.component  routes={item.children}  />   
              } else { // 渲染一级
                return <item.component {...props} />
              }
            }}/>
          )
        })
      }
      {/* 路由重定向 */}
      <Redirect to='/home'/>
    </Switch>
  )
}

export default RouterView
