
const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  // 拷贝数据 修改数据  返回确定数据
  const newState = JSON.parse(JSON.stringify(state));
   
  // 
  if (action.type === 'input_change') {
    newState.inputValue = action.value;
  }

  if (action.type === 'add_list') {
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      console.log(newState.list)
  }
  if (action.type === 'remove_item') {
    newState.list.splice(action.index, 1);
  }
  return newState;
}