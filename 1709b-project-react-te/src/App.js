import React from 'react';
import { BrowserRouter, NavLink, Route, Switch,Redirect } from 'react-router-dom';

import RouterView from './router/index'
import config from './router/config'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className='box'>
            <RouterView routes={config} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
