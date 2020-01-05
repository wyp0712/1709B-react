const defalutState = { // 数据仓库
  cartList: [],
  list: [],
  isShowHeader: true
}

export const reducerName = (state = defalutState, action) => {
  // 拷贝数据， 改变数据， 返回数据
  const newState = JSON.parse(JSON.stringify(state))

  if (action.type === 'init_cart_list') {
    newState.list = action.data
    return  newState
  }

  if (action.type === 'add_cart_item') {
    newState.list[action.index].count++;
    return newState
  }

  if (action.type === 'remove_cart_item') {
    newState.list[action.index].count--;
    return  newState
  }

  if (action.type === 'total_cart_count') {
    newState.totalCount = action.totalCount
    return  newState
  }

  if (action.type === 'is_show_header') {
    newState.isShowHeader = action.isShow
    return newState
  }

  return state;
}