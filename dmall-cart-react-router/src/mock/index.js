import Mock from 'mockjs';

const cityData = Mock.mock({
  'guonei|10': [
    {
      'pro': [
        {
          'title': '@city',
          'children|5': [ { city: '@city' } ]
        }
      ]
    }
  ],
  'guoji|10': [
    {
      '美洲|5': [
        {
          'city': '@city'
        }
      ],
      '澳洲|5': [
        {
          'city': '@city'
        }
      ]
    }
  ]
})

// console.log(cityData, 'cityData')

// 购物车列表接口
Mock.mock('/api/city', cityData)