
import Home from '../views/Home'
import Cart from '../views/Cart'
import Detail from '../views/Detail'
import Login from '../views/Login'

const routes = [
  {
    path: '/home',
    component: Home
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