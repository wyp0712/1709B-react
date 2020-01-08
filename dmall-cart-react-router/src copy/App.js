import React from 'react';
import { BrowserRouter, HashRouter,Redirect } from 'react-router-dom'

import RouterView from './router/index'
import config from './router/config'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* 一级路由 */}
        <RouterView routes={config}></RouterView>
      </div>
    </BrowserRouter>

  );
}

export default App;
