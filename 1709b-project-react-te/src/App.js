import React from 'react';
import { BrowserRouter, NavLink, Route, Switch,Redirect } from 'react-router-dom';

import loadable from './utils/loadable'
// const Home = React.lazy(() => import('./views/Home'))
// const Cart = React.lazy(() => import('./views/Cart'))
// const Login = React.lazy(() => import('./views/Login'))
// console.log(Home, 'home')

const Home = loadable(()=>import('@pages/home'))

import Home from './views/Home';
import Cart from './views/Cart';
import Login from './views/Login';
// console.log(Home, 'home')

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
        {/* <BrowserRouter>
          <NavLink to='/'>首页</NavLink>
          <NavLink to='/cart'>购物车</NavLink>
          <NavLink to='/login'>登陆页面</NavLink>
          <div className='box'>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route path='/cart' render={ props => <Cart {...props}></Cart> }></Route>

              <Redirect to='/'/>
            </Switch>
          </div>
        </BrowserRouter> */}
      </div>
    )
  }
}

export default App;
