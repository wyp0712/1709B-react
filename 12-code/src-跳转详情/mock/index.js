import qs from 'qs'
import Mock from 'mockjs'
const type = ['首页', '排行', '分类']
const imgs = [
            '/img/1.png',
            '/img/2.png',
            '/img/3.png',
            '/img/4.png',
            '/img/5.png',
            '/img/6.png',
            '/img/7.png',
            '/img/8.png',
            '/img/9.png',
          ]
var data = Mock.mock({
    'list|10': [
        {
            "id|+1": 1,
            "username": '@ctitle',
            'password': '@word',
            'age|18-30': 1,
            'name': '@cname',
            'sex|1-1': true,
            'type|+1': type,
            'title|+1': '@ctitle',
            'img|+1': imgs
        }
    ]
})

// 列表接口
Mock.mock('/api/list', data.list)

// 详情接口
Mock.mock(/\/api\/detail\?\.*/, function(options) {
  const { id } = qs.parse(options.url.split('?')[1])
  console.log({...id}, 'id------id')
  return data.list.filter(val => val.id === Number(id))
})

// 详情接口
Mock.mock(/\/api\/search\?\.*/, function(options) {
  const { type } = qs.parse(options.url.split('?')[1])
  console.log(type)
})


