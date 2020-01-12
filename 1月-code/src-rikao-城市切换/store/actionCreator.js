import axios from 'axios';
import '../mock/index'

export const initCartData = (data) => {
  return {
    type: 'init_cart_data',
    data
  }
}

export const getToCart = (item) => {
  return {
    type: 'to_cart',
    item
  }
}

export const getAddCart = (index) => {
  return {
    type: 'add_cart',
    index
  }
}

export const getRemoveCart = (index) => {
  return {
    type: 'remove_cart',
    index
  }
}

export const getData = () => {
  return (dispatch) => {
    // 初始数据
    axios.get('/api/cart').then(res => {
      const action = initCartData(res.data)
      dispatch(action)
    })
  }
}