// 一级
import Home from '../views/Home'
import Cart from '../views/Cart'
import Detail from '../views/Detail'
import Login from '../views/Login'
// 二级
import HomeIndex from '../views/pages/HomeIndex'
import HomeClassify from '../views/pages/HomeClassify'


/**
 * 
 * 有头有尾部的页面，拍成二级路由 home 
 * 没有头 没有尾部 排成一级路由；
 * 
 */

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home',
        redirect: '/home/index'
      },
      {
        path: '/home/index',
        component: HomeIndex,
      },
      {
        path: '/home/classify',
        component: HomeClassify
      }
    ]
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes;