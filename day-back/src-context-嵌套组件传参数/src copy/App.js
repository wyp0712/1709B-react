import React from 'react';
import './App.css';

import Context from './utils/index'
import List from './components/List'

class App extends React.Component {
  constructor(props) {
     super(props)

     this.state = {
       title: '你好'
     }
  }

  render() {
    return (
      <div className="App">
        <Context.Provider value={this.state.title}>
           <List>

           </List>
        </Context.Provider>

      </div>
    )
  }
}

export default App;
