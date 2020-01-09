import Mock from 'mockjs';

const MockData = Mock.mock({
  'list|20': [
    {
      'id': '@id',
      'name': '@cname',
      'count': 0,
      'price': 100,
      'image': '@image(200x150,@color, @city)'
    }
  ]
})

// 列表接口
Mock.mock('/api/list', MockData)

//  get 截取参数 详情接口
Mock.mock(/\/api\/detail\?./, function(options) {
  const id = options.url.split('?')[1].split('=')[1]
  return MockData.list.filter(val => { 
    return val.id == id;
  })
})

// post 参数
Mock.mock('/api/detail', 'post', function(opt) {
  console.log(JSON.parse(opt.body), 'opt')
  const { id } = JSON.parse(opt.body)
    return MockData.list.filter(val => { 
    return val.id == id;
  })
})