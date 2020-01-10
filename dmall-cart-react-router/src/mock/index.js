import Mock from 'mockjs';
const CartData = Mock.mock({
  'list|10': [
    { 
      'id': '@id',
      'name': '@ctitle(1)',
      'img': '@image(100x200, @color, @city)',
      'count': 0,
      'price': '@integer(10,100)'
    }
  ]
})

// 购物车列表接口
Mock.mock('/api/cart', CartData.list)