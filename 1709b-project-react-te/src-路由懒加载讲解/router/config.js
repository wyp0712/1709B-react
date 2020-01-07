import loadable from './utils/loadable';

const Home = loadable(()=>import('./views/Home'))
const Cart = loadable(()=>import('./views/Cart'))
const Login = loadable(()=>import('./views/Login'))

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes;