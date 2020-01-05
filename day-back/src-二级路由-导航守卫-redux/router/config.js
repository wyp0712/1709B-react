import Home from '../views/Home'
import Cart from '../views/Cart'
import Classify from '../views/Classify'
import Detail from '../views/Detail'
import Login from '../views/Login'
import Mine from '../views/Mine'
import Vip from '../views/Vip'

import HomeTab1 from '../views/homeTab1'
import HomeTab2 from '../views/homeTab2'

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/tab1',
        component: HomeTab1
      },
      {
        path: '/home/tab2',
        component: HomeTab2
      }
    ]
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/classify',
    component: Classify,
  },
  {
    path: '/cart',
    component: Cart,
    requireAuth: true,
  },
  {
    path: '/detail',
    component: Detail,
  },
  {
    path: '/mine',
    component: Mine,
  },
  {
    path: '/vip',
    component: Vip,
  }
]

export default routes