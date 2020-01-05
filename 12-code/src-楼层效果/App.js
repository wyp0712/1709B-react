import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import './mock/index'
import { BrowserRouter } from 'react-router-dom'
import './static/iconfont/iconfont.css'
import RouterView from './router/index'
import config from './router/config'
// 样式模块化
import styled from 'styled-components';
// import { Provider } from 'react-redux'
// import store from './store/index'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // <Provider store={store}>
        <AppWrapper>
          <BrowserRouter>
            <MainDiv className="main">
              <RouterView routes={config}></RouterView>
            </MainDiv>
          </BrowserRouter>
        </AppWrapper>
      // </Provider>
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

const AppWrapper = styled.div`
   width:100vw;
   height:100vh;
   display:flex;
   flex-direction:column;
`;

const HeaderDiv = styled.div`
  width: 100vw;
  height: 45px;
  background: skyblue;
  ${props=>`color:${props.primary?"white":"red"}`}
`;

const MainDiv = styled.main`
  width: 100vw;
  flex:1;
  overflow: auto;
`;
