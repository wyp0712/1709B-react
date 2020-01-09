import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import RouterView from './router/index'
import config from './router/config'

import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <RouterView  routes={config} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
