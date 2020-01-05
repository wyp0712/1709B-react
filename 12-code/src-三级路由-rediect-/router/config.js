import Home from '../views/Home/Home'
import Cart from '../views/Cart/Cart'
import Detail from '../views/Detail/Detail'

import User from '../views/Cart/pages/user'
import Info from '../views/Cart/pages/info'

import Tab1 from '../views/Cart/pages/pages/tab1'
import Tab2 from '../views/Cart/pages/pages/tab2'

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/detail/:id',
    component: Detail,
  },
  {
    path: '/cart',
    component: Cart,
    children: [
      {
        path: '/cart/user',
        component: User,
        children: [
          {
            path: '/cart/user/tab1',
            component: Tab1,
          },
          {
            path: '/cart/user/tab2',
            component: Tab2,
          }
        ]
      },
      {
        path: '/cart/info',
        component: Info,
        redirect: '/cart/info/tab1',

      }
    ]
  }
]

export default routes