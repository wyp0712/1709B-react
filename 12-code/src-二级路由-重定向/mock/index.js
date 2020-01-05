import Mock from 'mockjs'
import qs from 'qs'

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


// get接口
// Mock.mock(/\/api\/detail\?\.*/, function(options) {
//   const { id } = qs.parse(optops) // id string
//   // String(id)
//   return 
// })

// Mock.mock(/\/api\/list\?\.*/, function(options) {

// })

// Mock.mock(/\/api\/carousel\?\.*/, function(options) {

// })