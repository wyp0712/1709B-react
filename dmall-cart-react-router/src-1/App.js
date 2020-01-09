import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import RouterView from './router/index'
import config from './router/config'

function App() {
  return (
    <div>
      <BrowserRouter>
        <RouterView  routes={config} />
      </BrowserRouter>
    </div>
  );
}

export default App;
