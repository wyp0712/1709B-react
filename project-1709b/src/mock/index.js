import Mock from 'mockjs';

const data = Mock.mock({
  'list|10': [
    {
      'name': '@cname',
      'title': '@ctitle',
      'pro': '@city',
      'children|10': [
         {
           'pro': '@city'
         }
      ],
      'img': '@image(100x100, @color, @city)'
    }
  ]
})

// 列表接口
Mock.mock('/api/list', data)