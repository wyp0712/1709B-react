import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom'

import Home from './views/Home'
import Cart from './views/Cart'
import Detail from './views/Detail'
import Login from './views/Login'

/**
 * @param { BrowserRouter: 必须包含住所有的路由页面（包括路由标签）navlink }
 * 
 * @param { NavLink: 类似a标签 to=''}
 * 
 * @param { exact: 精确匹配 }
 * 
 * @param { Redirect:路由重定向 to=''}
 * 
 * 
 */

class  App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
         <NavLink to='/home'>首页</NavLink> |
         <NavLink to='/cart'>购物车</NavLink> |
         <NavLink to='/detail'>详情页面</NavLink> |
         <NavLink to='/login'>登陆</NavLink> 
         <div>
           
           <Switch>
              <Route path='/home' component={Home} />
              <Route path='/cart' component={Cart} />
              <Route path='/detail' component={Detail} />
              <Route path='/login' component={Login} />
              <Redirect to='/home'/>
           </Switch>


         </div>


        </BrowserRouter>
      </div>
    );
  }


 
}

export default App;
