/**
 * @param { redux-thunk :redux中间件 解决在reducer中使用异步函数的问题的 }
 */

import { reducerName } from './reducer'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
    reducerName,
    applyMiddleware(thunk)
  )

export default store