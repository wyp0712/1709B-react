import Home from '../views/Home'
import Cart from '../views/Cart'

import Detail from '../views/Detail'
import Login from '../views/Login'
// import Mine from '../views/Mine'


const routes = [
  {
    path: '/home',
    component: Home,
    isHeader: true,
  },
  {
    path: '/cart',
    component: Cart,
    requireAuth: true, // 导航守卫字段
    isHeader: true,
  },
  {
    path: '/detail/:id',
    component: Detail,
    isHeader: false,
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes