import Home from '../views/Home'
import Cart from '../views/Cart'


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
  }
]

export default routes