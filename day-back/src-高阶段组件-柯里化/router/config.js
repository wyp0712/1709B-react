import Home from '../views/Home.js'
import Cart from '../views/Cart.js'
import Classify from '../views/Classify'
import Detail from '../views/Detail'
import Login from '../views/Login.js'
import Mine from '../views/Mine.js'
import Vip from '../views/Vip'

import Hometab1 from '../views/homeTab1'
import Hometab2 from '../views/homeTab2'



const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/tab1',
        component: Hometab1
      },
      {
        path: '/home/tab2',
        component: Hometab2
      }
    ]
  },
  {
    path: '/cart',
    component: Cart,
    requireAuth: true // 导航守卫字段
  },
  {
    path: '/detail/:id',
    component: Detail,
  },
  {
    path: '/classify',
    component: Classify,
  },
  {
    path: '/vip',
    component: Vip,
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes