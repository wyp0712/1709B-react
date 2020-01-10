
const defaultState = {
   initData: [], // 初始化的所有数据
   cartData: [], // 购物车数据
}

export default (state = defaultState, action) => {
  // 1. 拷贝数据 2. 修改数据 3. 返回确定数据
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === 'init_cart_data') {
    newState.initData = action.data
  }

  if (action.type === 'to_cart') {
    // 数组去重；
    let goods = newState.cartData.find(val => val.id === action.item.id);
    if(goods) {
      goods.count ++
    } else {
      action.item.count = 1;
      newState.cartData.push(action.item)
    }
  }

  if (action.type === 'add_cart') {
    newState.cartData[action.index].count++
  }

  if (action.type === 'remove_cart') {
    if ( newState.cartData[action.index].count <=1) {
      if (window.confirm('你确定删除吗')) {
        newState.cartData.splice(action.index, 1)
        return newState;
      } else {
        return newState;
      }
    }
    newState.cartData[action.index].count--
  }

  return newState
}