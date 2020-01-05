const defaultState = {
   carouselData: [], // 
   bookData: [], // 总的数据
   searchVal: '', // 
   searchList: [], // 搜索数据
   detailData: [],  // 详情数据
   bookrack: [], // 只要加入书架的数据都是true
   isShowDialog: false,
   removeIndex: ''
}

export const reducerName = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'init_carousel_data':
     newState.carouselData = action.data;
    return newState;

    case 'to_cart':
     const goods = newState.bookrack.find(val => val.id === action.item.id)
     if (goods) {
      goods.count++
     } else {
      action.item.count = 1;
      newState.bookrack.push(action.item)
     }
    return newState;

    case 'add_cart':
      newState.bookrack[action.index].count++
    return newState;

    case 'close_dialog':
      if (action.index === 0) {
        newState.bookrack.splice(newState.removeIndex, 1)
      }
      newState.isShowDialog = false;
    return newState;

    case 'remove_cart':
      if (newState.bookrack[action.index].count <= 1) {
        newState.removeIndex = action.index;
        newState.isShowDialog = true;
        return newState;
      }
      newState.bookrack[action.index].count--
    return newState;

    case 'init_book_data':
      newState.bookData = action.data;
    return newState;

    case 'init_search_value':
      newState.searchVal = action.value;
      newState.searchList = []
    return newState;

    case 'init_search_list': // 
      newState.searchList = action.data;

      newState.bookrack.forEach(item => {
        newState.searchList.forEach(val => {
          if (item.id === val.id) {
            val.isCheck = item.isCheck
          }
        })
      })
    return newState;

    case 'detail_data': // 
      newState.detailData = action.detailData
      newState.bookrack.forEach(item => {
        newState.detailData.forEach(val => {
          if (item.id === val.id) {
            val.isCheck = item.isCheck
          }
        })
      })
    return newState;

    case 'add_detail':
      newState.detailData[0].isCheck = action.flag;
      newState.bookrack.push(newState.detailData[0])
    return newState;

    case 'add_search':
      newState.searchList.forEach((val) => {
        if(val.id === action.item.id) {
          val.isCheck = true
          newState.bookrack.push(val)
        }
      })
    return newState;

    default:
      return state
  }
}