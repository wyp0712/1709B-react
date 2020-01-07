import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';

import loadable from '../utils/loadable';
const Home = loadable(()=>import('../views/Home'))
const Cart = loadable(()=>import('../views/Cart'))
const Login = loadable(()=>import('../views/Login'))

const RouterView = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/cart' render={ props => <Cart {...props}></Cart> }></Route>
      <Redirect to='/'/>
    </Switch>
  )
}
export default RouterView;