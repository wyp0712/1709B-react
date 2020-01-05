import Mock from 'mockjs'
import qs from 'qs'


// const typeID = [0,1,2,3,4]
const hosuseType = ['一室','二室','三室','四室','五室以上'];

const data = Mock.mock({
  'bookList|20': [
    {
      'img': '@image(150x200, @color, @city)',
      'id': '@id',
      'name': 1 + '@city',
      'isCheck': false,
      'des': '@cword(25)',
      'count': 0,
      'price': 100,
      'area|+1': hosuseType
    }
  ],
  houseArr: {
    '0': [
      {
        'area|10': [
          {
            'district': '@region',
            'children|10': [
              {
                'city': '@city'
              }
            ]
          }
          ], 
        'subway|10': [
            {
              'district': '@region',
              'children|10': [
                {
                  'city': '@city'
                }
              ]
            } 
          ]
      }
    ],
    '1': ['200-300', '300-400', '400-500','500-600'],
    '2': ['一室','二室','三室','四室','五室以上','一室','二室','三室','四室','五室以上'],
    '3': [],
    '4': [
      '默认排序',
      '最新发布',
      '总价从低到高',
      '总价从高到低',
      '单价从低到高',
      '单价从高到低',
      '面积从大到小'
    ],
  },

  'carouselData|5': [
    {
      'img': '@image(375x150, @color, @ctitle)',
      'id': '@id',
    }
  ]
})

// console.log(data, 'data')
Mock.mock('/api/house', data.houseArr)


// 列表接口
Mock.mock('/api/book', data.bookList)

// 轮播图数据
Mock.mock('/api/carousel', data.carouselData)

// 模糊搜索
Mock.mock(/\/api\/search\?\.*/, function(opt) {
  const { type } = qs.parse(opt.url.split('?')[1]);
  return data.bookList.filter((item, index) => {
    return item.name.includes(type)
  })
})

// 详情接口
Mock.mock(/\/api\/detail\?\.*/, function(opt) {
  const { id } = qs.parse(opt.url.split('?')[1]);
  return data.bookList.filter(val => val.id === id)
})
