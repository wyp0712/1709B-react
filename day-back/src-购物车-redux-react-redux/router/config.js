import Book from '../views/bookrack'
import BookStore from '../views/bookstore'
import FindBook from '../views/find'
import Detail from '../views/detail'
import Login from '../views/login'
import Mine from '../views/mine'
import SearchCom from '../views/search'

import Findtab1 from '../views/find-pages/find-tab1'
import Findtab2 from '../views/find-pages/find-tab2'

const routes = [
  {
    path: '/',
    redirect: '/book'
  },
  {
    path: '/book',
    component: Book
  },
  {
    path: '/search',
    component: SearchCom
  },
  {
    path: '/store',
    component: BookStore
  },
  {
    path: '/find',
    component: FindBook,
    children: [
      {
        redirect: '/find/findtab1'
      },
      {
        path: '/find/findtab1',
        component: Findtab1
      },
      {
        path: '/find/findtab2',
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
