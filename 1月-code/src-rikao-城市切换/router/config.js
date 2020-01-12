// 一级
import Home from '../views/Home/index'
// import Detail from '../views/Detail/index'

// // 二级
// import HomeIndex from '../views/Home/pages/HomeIndex'
// import HomeCart from '../views/Home/pages/HomeCart'


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    com: Home,
    // children: [
    //   {
    //     path: '/home',
    //     redirect: '/home/index'
    //   },
    //   {
    //     path: '/home/index',
    //     com: HomeIndex,
    //     title: '首页'
    //   },
    //   {
    //     path: '/home/cart',
    //     com: HomeCart,
    //     title: '购物车'
    //   }
    // ]
  },
  // {
  //   path: '/detail',
  //   com: Detail
  // }
]

export default routes