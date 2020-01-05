import Mock from 'mockjs'
import cartList from './data.json.js.js'

Mock.mock('/api/cart', cartList)