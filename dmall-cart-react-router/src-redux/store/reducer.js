
const defaultState = {
   initData: [],
   cartData: []
}

export default (state = defaultState, action) => {

  const newState = JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem('cart')))) || JSON.parse(JSON.stringify(state))
  if (action.type === 'init_cart_data') {
    newState.initData = action.data
  }

  if (action.type === 'to_cart') {
    newState.cartData = [...newState.cartData, action.item]
    console.log(newState)
  }

  if (action.type === 'add_cart') {
    newState.cartData[action.index].count++
  }

  if (action.type === 'remove_cart') {
    newState.cartData[action.index].count--
  }

  localStorage.setItem('cart', JSON.stringify(newState))

  return newState;
}