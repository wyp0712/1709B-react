import React from 'react';
import TodoList from './components/TodoList'

// 引入react-redux文件； 组件和redux连接
import { Provider } from 'react-redux'
import store from './store/index'

const App = () => {
  return (
    <Provider store={store}>
       <TodoList />
    </Provider>
  )
}

export default App;