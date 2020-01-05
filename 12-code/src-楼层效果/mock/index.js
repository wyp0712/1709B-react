import qs from 'qs'
import Mock from 'mockjs'

// const type = ['首页', '排行', '分类']
const alpha = [
  'a',
  'b',
  'c',
  'd',
  'e','f','g','h', 'i', 'j','k','l','m','n','o','p','q',
  'r','s','t','u','v','w','x','y','z'
]
var data = Mock.mock({
    'city|26': [
      {
        'alpha|+1': alpha,
        'city|10-20': [ {
          'city': '@city',
        }]
      }
    ],
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

data.city.sort((a, b) => {
  if(a>b) {
    return 1
  } else if (a<b) {
    return -1
  } else {
    return 0
  }
})
console.log(data.city)

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
