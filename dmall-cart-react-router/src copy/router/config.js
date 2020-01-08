
// 一级
import Cart from '../views/Cart/Cart'
import Home from '../views/Home/Home'
import Detail from '../views/Detail/index'

// 二级
import HomeIndex from '../views/Home/pages/HomeIndex'
import HomeCat from '../views/Home/pages/HomeCat'

// 三级
import CatTab1 from '../views/Home/pages/pages/cattab1'
import CatTab2 from '../views/Home/pages/pages/cattab2'

// 三级的重定向

/**
 * 1. /    /cart
 * 
 * 2. /home  /home/index
 * 
 * 3. /home/cat   /home/cat/tab1
 */

const routes = [
   {
     path: '/',
     redirect: '/cart'
   },
   {
     path: '/detail',
     com: Detail
   },
   {
     path: '/cart',
     com: Cart
   },
   {
    path: '/home',
    com: Home,
    children: [
      {
        path: '/home',
        redirect: '/home/index'
      },
      {
        path: '/home/index',
        com: HomeIndex
      },
      {
        path: '/home/cat',
        com: HomeCat,
        // children: [
        //   {
        //     path: '/home/cat',
        //     redirect: '/home/cat/tab1'
        //   },
        //   {
        //     path: '/home/cat/tab1',
        //     com: CatTab1
        //   },
        //   {
        //     path: '/home/cat/tab2',
        //     com: CatTab2,
        //   }
        // ]
      }
    ]
  }
]

export default routes;