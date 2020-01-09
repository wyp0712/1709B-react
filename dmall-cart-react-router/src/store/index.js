import { createStore } from 'redux'
import reducer from './reducer/index'


// 管理员身份就创建成功了
const store = createStore(reducer);

export default store;