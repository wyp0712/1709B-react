import Mock from 'mockjs';
/**
 * @param { 拦截ajax, 生成随即数据 }
 */
const data = Mock.mock({
  'list|10': [
    {
      'name': '@cname',
      'title': '@ctitle',
      'img': '@image(100x100,@color,@city)',
    }
  ]
})

// 列表接口
Mock.mock('/api/list', function() {
  return data
})

