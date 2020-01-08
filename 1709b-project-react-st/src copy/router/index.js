import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

/**
 * 
 * @param { 组件渲染的两种方式： }
 * 
 * @param {component , render} 
 * 
 * 区别： 优先级。 component 大于 render
 * 
 * 特点：
 * 1. 如果采用component 渲染组件的话。参数会自带三个属性：
 *   history:  跳转页面的
 *   location: 用来取参数
 *    match:    用来匹配路由的
 * 
 * 2. 如果采用render渲染组件的话，不会自己带上这三个参数：需要采用手动的方式，传递给
 * 要渲染的组件
 * 
 * @param {如果要渲染二级路由，也要在有二级路由的页面下面渲染 RouterView}
 * 
 * 
 */

const RouterView = (props) => {
  const routesArr = props.routes.filter(val => val.component);
  const redirectArr = props.routes.filter(val => val.redirect);
  return (
    <div>
      <Switch>
        {
          routesArr.map((item, index) => {
            return <Route key={index} path={item.path}  render={ props => {
              return <item.component {...props}  routes={item.children} />
            }} ></Route>
          })
        }
        {
          redirectArr.map((item, index) => {
            return <Redirect key={index} from='/' to={item.redirect}/>
          })
        }
     </Switch>
    </div>
  )
}

export default RouterView;