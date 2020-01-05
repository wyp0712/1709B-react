const defaultState = {
  cartData: [], // 总的数据
  goodsList: [], // 购物车加入的数据
  isShowDialog: false,
  removeIndex: '' // 删除数据下标
}

export const reducerName = (state = defaultState, action) => {
  // 拷贝数据  修改数据  返回确定数据
  const newState = JSON.parse(JSON.stringify(state))

  if (action.type === 'init_Cart_data') {
    newState.cartData = action.data;
    return newState;
  }

  if (action.type === 'to_cart') {
    // newState.goodsList.push(item)
    let goods = newState.goodsList.find(val => val.id === action.item.id)

    if (goods) {
      goods.count++
    } else {
      // count = 0;
      action.item.count = 1;
      newState.goodsList.push(action.item)
    }

    return newState;
  }

  // ++
  if (action.type === 'add_cart') {
    newState.goodsList[action.index].count++
    return newState;
  }

  // -- 
  if (action.type === 'remove_cart') {
    if (newState.goodsList[action.index].count <=1) {
      newState.isShowDialog = true;
      newState.removeIndex = action.index
      return newState;
    }
    newState.goodsList[action.index].count--
    return newState;
  }

  // dialog弹出框操作 确定 取消按钮
  if (action.type === 'dialog_msg') {
    if (action.index === 0) {
      newState.goodsList.splice(newState.removeIndex, 1)
    }
    newState.isShowDialog = false;
    return newState;
  }

  return state
}
