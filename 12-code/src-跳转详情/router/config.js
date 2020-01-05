import Home  from '../views/Home'
import Book  from '../views/Book'
import Detail from '../views/Detail'

export default {
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/book',
      component: Book
    },
    {
      path: '/detail/:id',
      component: Detail
    }
  ]
}