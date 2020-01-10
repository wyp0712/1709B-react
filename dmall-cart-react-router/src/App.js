import React from 'react';
// 路由引入文件
import RouterView from './router/index'
import config from './router/config'
import { BrowserRouter } from 'react-router-dom'
// redux 引入文件
import { Provider } from 'react-redux'
import store from './store/index'

const App = () => {
  return <div className='App-wrapper'>
    <Provider store={store}>
      <BrowserRouter>
        <RouterView routes={config}></RouterView>
      </BrowserRouter>
    </Provider>
  </div>
}

export default App;