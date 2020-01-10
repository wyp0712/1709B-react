import { createStore,applyMiddleware } from 'redux'
import reducer from './reducer/index'
import thunk from 'redux-thunk'

// 管理员身份就创建成功了
const store = createStore(
   reducer,
   applyMiddleware(thunk)
  );

export default store;