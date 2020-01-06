import ajax from './request';
/**
 * @param { get: params }
 * @param { post: data }
 */

// post接口测试
export const testPostList = (data) => {
  return ajax({
    url: '/api/post_test',
    method: 'post',
    data
  })
}

// get接口测试
export const getLogin = (params) => {
  return ajax({
    url: '/api/login',
    method: 'get',
    params
  })
}

export const getUserList = (params) => {
  return ajax({
    url: '/api/task/list',
    method: 'get',
    params
  })
}



