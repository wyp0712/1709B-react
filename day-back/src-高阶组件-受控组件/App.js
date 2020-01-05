import React from 'react';
// import logo from './logo.svg';
import './App.css';
import InputWrapper from './componets/HightInput'
import DataList from './mock/data.json.js'
console.log(DataList.movieList, 'DataList')

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.setState({
      list: DataList.movieList
    })
  }

  render() {
    return (
      <div className="App">
          <InputWrapper
            inputFn={ (v) => this.handleFileterMovie(v)}
          />

         <ul>

         </ul>
      </div>
    );
  }

  handleFileterMovie = (v) => {
    console.log(v, 'v')
    // fileter  includes
  }

}

export default App;
