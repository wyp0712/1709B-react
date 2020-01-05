import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom'

import RouterView from './router/index'
import config from './router/config'

// import Top from './component/HightOrderComponent'
import FooterBar from './component/FooterBar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterView routes={config}/>

        <FooterBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
