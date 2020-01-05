/**
 * 
 * @param {数据请求} state 
 * @param {加加} action 
 * @param {减减} action 
 *
 */

const defaultState = { // 数据仓库 必须存在  仓库中默认的值根据业务功能去定义
  city: [] 
}

export const reducerName = (state = defaultState, action) => {
  // 拷贝数据  修改数据  返回确定数据 
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'init_city_list') {
    newState.city = action.data
    return newState
  }

  return state;
}
