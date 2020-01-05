import qs from 'qs'
import Mock from 'mockjs'

// const type = ['首页', '排行', '分类']

var data = Mock.mock({
    'inland|12': [
        {
          'id|+1': 1,
          'pro': '@province',
          'children|10': [ {
            'city': '@city',
          }]
        }
    ],
    'international|10': [
        {
          "id|+1": 1,
          'pro': '@province',
          'children|10': [ {
            'city': '@city',
          }]
        }
    ]
})
console.log(data, 'data')

// 列表接口
Mock.mock('/api/list', data)

// 详情接口
Mock.mock(/\/api\/detail\?\.*/, function(options) {
  const { id } = qs.parse(options.url.split('?')[1])
  return data.list.filter(val => val.id === Number(id))
})

// 模糊搜索接口
Mock.mock(/\/api\/search\?\.*/, function(options) {
  const { type } = qs.parse(options.url.split('?')[1])
  console.log(type)
})


const UserData = [
  {
    user: 'devin',
    pwd: '123'
  }
]
Mock.mock('/api/login', 'post', function(options) {
  // qs.parse()  key=val&key1=val&key2=val2
  console.log(JSON.parse(options.body), 'options')
  const { user, pwd } = JSON.parse(options.body)
  const flag = UserData.some(item => item.user === user && item.pwd === pwd)

  if (flag) {
    return {
      errCode: 0,
      msg: 'success',
      token: `bawei_${user}_${Date.now()}`
    }
  } else {
    return {
      errCode: -1,
      msg: 'fail',
    }
  }
})
