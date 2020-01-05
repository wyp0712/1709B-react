const defaultState = {
  cartData: [], // 总的数据
  goodsList: [], // 购物车加入的数据
  isShowDialog: false,
  removeIndex: '', // 删除数据下标
  detailData: [],
  houseArr: [], // 房子数据
  closeFlag: false,
  navList: [
    {
      name: '区域',
      isClick: false
    },
    {
      name: '价格',
      isClick: false
    },
    {
      name: '房型',
      isClick: false
    },
    {
      name: '更多',
      isClick: false
    },
    {
      name: '排序',
      isClick: false
    }
  ],
  tabIndex: 0
}

export const reducerName = (state = defaultState, action) => {
  // 拷贝数据  修改数据  返回确定数据
  const newState = JSON.parse(JSON.stringify(state))

  // 数据过滤
  if (action.type === 'filter_data') {
    newState.cartData.filter((val, index) => {
       val.isCheck = false;
       if (!val.area.includes(action.item)) {
         val.isCheck = true
       }
    })
    // 数据过滤完之后关闭弹出框
    newState.closeFlag = false;
    // 关闭弹出框后，让tab切换都置为空
    newState.navList.forEach(item => {
      item.isClick = false;
    })
    return newState
  }

  // 改变全局的下标 
  if(action.type === 'change_tabindex') {
    newState.tabIndex = action.index;
    newState.navList.forEach((item, ind) => {
      if (action.index !== ind) {
        item.isClick = false
      }
    })
    newState.navList[action.index].isClick = !newState.navList[action.index].isClick;
    let isDialog = newState.navList.some(val => {
       return val.isClick
    })
    if (isDialog) {
      newState.closeFlag = true
    } else {
      newState.closeFlag = false
    }
    return newState
  }

  if (action.type === 'init_house_data') {
    newState.houseArr = action.data;
    return newState;
  }
  
  // 关闭弹出框
  if (action.type === 'close_dialog') {
    newState.closeFlag = action.flag
    return newState
  }

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

  if (action.type === 'detail_data') {
    newState.detailData = action.detailData
    return newState;
  }

  return state
}
