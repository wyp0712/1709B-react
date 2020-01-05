
import axios from './node_modules/axios'
import '../mock/index'

export const initCartData = (data) => ({
  type: 'init_Cart_data',
  data
})

export const toCartFn = (item) => ({
  type: 'to_cart',
  item
})

export const addCartFn = (index) => ({
  type: 'add_cart',
  index
})

export const removeCartFn = (index) => ({
  type: 'remove_cart',
  index
})

// redux-thunk
export const getInitCartList = () => {
  return (dispatch) => {
    axios.get('/api/book').then(res => {
      console.log(res.data, 'data----data')
      const data = res.data
      const action = initCartData(data)
      dispatch(action)
    })
  }
}