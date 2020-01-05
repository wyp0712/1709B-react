import React, { Component } from 'react';
import './App.scss';
// import { Button,InputItem } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './mock/index'
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom'
import FooterBar from './components/FooterBar'
import './static/iconfont/iconfont.css'
import RouterView from './router/index'
import config from './router/config'

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction:column;
`;

const AppHeader=styled.header`
    width:100vw;
    height:45px;
    background:skyblue
    ${props=>`color:${props.primary?"white":"red"}`}
    border:${props=>props.black? "solid 3px black" : ""}
`;

const MainDiv=styled.main`
  width:100vw;
  flex:1;
  overflow: auto;
`;

// const AppFooter=styled.div`
//     width:100vw;
//     height:45px;
//     background:skyblue
//     ${props=>`color:${props.primary?"white":"red"}`}
//     border:${props=>props.black? "solid 3px black" : ""}
// `;

class App extends Component {
  render() {
    return (
      <AppDiv>
        <AppHeader primary>hello world</AppHeader>
        <BrowserRouter>
        
          <MainDiv>
            <RouterView routes={config}/> 
          </MainDiv>

          <FooterBar />
        </BrowserRouter>
      </AppDiv>
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
