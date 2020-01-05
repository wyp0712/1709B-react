const defaultState = {
   carouselData: [], // 
   bookData: [], // 总的数据
   searchVal: '', // 
   searchList: [], // 搜索数据
   detailData: [],  // 详情数据
   bookrack: [] // 只要加入书架的数据都是true
}

export const reducerName = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'init_carousel_data':
     newState.carouselData = action.data;
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