
const defaultState = {
   cityData: [],
   rightArr: []
}

export default (state = defaultState, action) => {
  // 1. 拷贝数据 2. 修改数据 3. 返回确定数据
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === 'init_city_data') {
     newState.cityData = action.data;
  }

  if (action.type === 'add_to_right') {
     newState.rightArr = action.data
  }

  return newState
}