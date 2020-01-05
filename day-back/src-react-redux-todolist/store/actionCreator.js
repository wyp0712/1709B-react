
// 把重复的代码提到一个文件中，自动化测试使用
import axios from 'axios'
import '../mock/index'
import * as type from './actionTypes' 

export const getInitCartList = (data) => ({
  type: type.INIT_CART_LIST,
  data
})

export const getAddCartItem = (index) => ({
  type: type.ADD_CART_LIST,
  index
})

export const getRemoveCartItem = (index) => ({
  type: type.REMOVE_CART_LIST,
  index
})

export const getDetailShow = (isShowHeader) => ({
  type: type.IS_SHOW_HEADER,
  isShowHeader
})

export const initCartList = () => {
  return (dispatch) => {
    axios.get('/api/list').then(res => {
      let data = res.data;
      const action = getInitCartList(data)
      dispatch(action)
    })
  }

}

