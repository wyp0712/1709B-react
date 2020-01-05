import Mock from 'mockjs'
import qs from 'qs'

const data = Mock.mock({
  'bookList|20': [
    {
      'img': '@image(150x200, @color, @ctitle)',
      'id': '@id',
      'name': 1 + '@cname',
      'isCheck': false,
      'des': '@cword(25)'
    }
  ],
  'carouselData|5': [
    {
      'img': '@image(375x150, @color, @ctitle)',
      'id': '@id',
    }
  ]
})


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
