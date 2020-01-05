// 数据仓库
const defaultState = {
  inputValue: '',
  list: []
}

// state 必须设置默认值 拷贝数据 改变数据 返回数据
export default (state = defaultState, action) => {
     // reducer不能改变数据，只能通过拷贝数据 改变数据 返回数据
  if (action.type === 'input_change_value') {
     // reducer不能改变数据，只能通过拷贝数据 改变数据 返回数据 改变input值的操作
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.target
    return newState
  }

  if (action.type === 'handle_btn_click') {
    // reducer不能改变数据，只能通过拷贝数据 改变数据 返回数据 改变input值的操作
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === 'delete_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}