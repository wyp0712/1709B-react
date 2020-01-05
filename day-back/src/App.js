import React, { Component } from './node_modules/react';
import { BrowserRouter, Redirect, NavLink } from './node_modules/react-router-dom'

import RouterView from './router/index'
import config from './router/config'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <BrowserRouter>

            <NavLink to='/home'>home</NavLink> |
            <NavLink to='/cart'>cart</NavLink>

            <RouterView routes={config}></RouterView>
          </BrowserRouter>
        </div>
    );
  }

  componentDidMount() {
    // fetch('/data.json')
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(e => console.log("Oops, error", e))
  }
}

export default App;

