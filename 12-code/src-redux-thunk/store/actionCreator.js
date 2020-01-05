
import axios from 'axios'
import '../mock/index'

export const getAddCartItem = (index) => ({
  type: 'add_cart_item',
  index
})

export const getRemoveCartItem = (index) => ({
  type: 'remove_cart_item',
  index
})

export const getInitData = (data) => ({
  type: 'init_cart_list',
  data
})

export const getInitCartList = () => {
  return (dispatch) => {
    axios.get('/api/list').then(res => {
      const data = res.data
      const action = getInitData(data)
      dispatch(action)
    })
  }
}


