import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
// redux-thunk 可以让action提交异步函数
import thunk from 'redux-thunk'

const store = createStore(
    reducer,
    applyMiddleware(thunk) // 注册thunk中间件
  )

export default store;