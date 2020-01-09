import React from 'react';
import TodoList from './components/todo';

// 数据提供者
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