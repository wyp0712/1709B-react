import Mock from 'mockjs'
import cartList from './data.json'

Mock.mock('/api/cart', cartList)