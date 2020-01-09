// 
const defaultState = { // 数据仓库
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
 // 拷贝数据 修改数据（逻辑） 返回确定数据 
 const newState = JSON.parse(JSON.stringify(state))

 if (action.type === 'change_input_value') {
    newState.inputValue = action.inputValue; 
 }

 if (action.type === 'add_list') {
   const list = [...newState.list, newState.inputValue];
   newState.list = list;
   newState.inputValue = ''
 }

 if (action.type === 'remove_data') {
   newState.list.splice(action.index, 1)
 }

 return newState;
}