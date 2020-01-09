// 一级
import Home from '../views/Home/index'
import Login from '../views/Login/index'
import Detail from '../views/Detail/index'

// 二级
import HomeIndex from '../views/Home/HomeIndex/index'
import HomeCart from '../views/Home/HomeCart/index'

const routes = [
  {
    path: '/',
    redirect: '/login'
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
        component: HomeIndex
      },
      {
        path: '/home/cart',
        component: HomeCart
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/detail',
    component: Detail
  }
]

export default routes;