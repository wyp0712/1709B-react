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
  }
]

export default routes