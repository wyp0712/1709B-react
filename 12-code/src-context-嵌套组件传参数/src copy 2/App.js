import React from 'react'
import List from './components/List'
import Context from './utils/index'
import RouterApp from './router/index'
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'hell react!'
    }
  }

  render() {
    return <div>
      <BrowserRouter>
        <RouterApp></RouterApp>
      </BrowserRouter>

      <Context.Provider value={this.state.title}>
         <List></List>
      </Context.Provider>
    </div>
  }
}

export default App;