import React from 'react';
import { BrowserRouter, NavLink, Route, Switch,Redirect } from 'react-router-dom';

import RouterView from './router/index'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* <NavLink to='/'>首页</NavLink>
          <NavLink to='/cart'>购物车</NavLink>
          <NavLink to='/login'>登陆页面</NavLink> */}
          <div className='box'>
            <RouterView />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
