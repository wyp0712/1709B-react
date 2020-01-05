
const defaultState = {
  list: [],
  cartList: []
}

export const reducerName = (state = defaultState, action) => {

  if (action.type === 'init_movie_list') {
     const newState = JSON.parse(JSON.stringify(state))
     newState.list = action.movieData
     return newState
  }

  if (action.type === 'add_cart_item') {
    const newState = JSON.parse(JSON.stringify(state))
    let goods = newState.cartList.find(val => val.id === action.item.id)
    if (goods) {
       goods.num++ 
    } else {
      action.item.num = 0;
      newState.cartList.push(action.item)
    }
    // console.log(newState, 'newState')
    return newState
  }

  return state;
}