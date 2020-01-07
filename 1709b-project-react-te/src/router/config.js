import loadable from '../utils/loadable';

const Home = loadable(()=>import('../views/Home'))
const Cart = loadable(()=>import('../views/Cart'))
const Login = loadable(()=>import('../views/Login'))

const Carttab1 = loadable(()=>import('../views/Tab1'))
const Carttab2 = loadable(()=>import('../views/Tab2'))

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    components: Home
  },
  {
    path: '/login',
    components: Login
  },
  {
    path: '/cart',
    components: Cart,
    children: [
      {
        path: '/cart',
        redirect: '/cart/tab1'
      },
      {
        path: '/cart/tab1',
        components: Carttab1
      },
      {
        path: '/cart/tab2',
        components: Carttab2
      }
    ]
  }
]

export default routes;