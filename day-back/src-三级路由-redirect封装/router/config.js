import Home from '../views/Home/Home'
import Cart from '../views/Cart/Cart'

import User from '../views/Cart/pages/user'
import Info from '../views/Cart/pages/info'

import Tab1 from '../views/Cart/pages/pages/tab1'
import Tab2 from '../views/Cart/pages/pages/tab2'

const routes = [
  {
    path: '/home',
    component: Home,
    isHeader: true,
  },
  {
    path: '/cart',
    component: Cart,
    redirect: '/cart/user',
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