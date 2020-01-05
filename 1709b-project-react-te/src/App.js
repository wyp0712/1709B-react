import React from 'react';
// import logo from './logo.svg';
import './App.css';

import WithPersistentData from './components/MyComponent'

// class MyComponent extends Component {
//   render() {
//     return <div>
//       { this.props.data }
//     </div>
//   }
// }

// function MyComponent(props) {
//   return <div>
//     { props.data }
//   </div>
// }

// const MyComponentWithPersistentData = withPersistentData(MyComponent)





function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {/* <MyComponentWithPersistentData /> */}
      <WithPersistentData />
    </div>
  );
}

export default App;
