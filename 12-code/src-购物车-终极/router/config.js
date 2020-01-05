import Cart from '../views/cart'
import Home from '../views/home'
import Classify from '../views/classify'
import Detail from '../views/detail'
import Login from '../views/login'
import Mine from '../views/mine'
import SearchCom from '../views/search'

import Findtab1 from '../views/find-pages/find-tab1'
import Findtab2 from '../views/find-pages/find-tab2'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/search',
    component: SearchCom
  },
  {
    path: '/classify',
    component: Classify,
    children: [
      {
        redirect: '/classify/findtab1'
      },
      {
        path: '/classify/findtab1',
        component: Findtab1
      },
      {
        path: '/classify/findtab2',
        component: Findtab2,
      }
    ]
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/mine',
    component: Mine
  }
]

export default routes;
