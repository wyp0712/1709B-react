import Mock from 'mockjs'
import cartList from './data.json.js'

Mock.mock('/api/cart', cartList)