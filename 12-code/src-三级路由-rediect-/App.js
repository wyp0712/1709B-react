import React from 'react';
import './App.css';
import { BrowserRouter,NavLink } from 'react-router-dom'

import RouterView from './router/index'
import config from './router/config'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to='/home'>home</NavLink>  |  
        <NavLink to='/cart'>cart</NavLink>  

        <RouterView routes={config}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
