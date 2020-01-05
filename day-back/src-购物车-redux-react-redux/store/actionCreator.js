
import axios from 'axios'
import '../mock/index'

export const initBookData = (data) => ({
  type: 'init_book_data',
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

export const closeDialog = (index) => ({
  type: 'close_dialog',
  index
})

export const getInitCartList = () => {
  return (dispatch) => {
    axios.get('/api/book').then(res => {
      const data = res.data;
      const action = initBookData(data)
      dispatch(action)
    })
  }
}