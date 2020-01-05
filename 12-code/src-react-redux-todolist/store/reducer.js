/**
 * 
 * @param {数据请求} state 
 * @param {加加} action 
 * @param {减减} action 
 *
 */

const defaultState = { // 数据仓库 必须存在  仓库中默认的值根据业务功能去定义
  inputValue: '',
  list: []
}

export const reducerName = (state = defaultState, action) => {
  // 拷贝数据  修改数据  返回确定数据 
  const newState = JSON.parse(JSON.stringify(state))

  if (action.type === 'change_input_value') {
    newState.inputValue = action.value
    return newState;
  }

  if (action.type === 'add_item') {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState;
  }

  if (action.type === 'delete_item') {
    newState.list.splice(action.index, 1)
    return newState;
  }

  return state;
}