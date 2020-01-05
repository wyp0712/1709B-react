import React, { Component } from 'react';
// import { Button,InputItem } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './mock/index'
import { BrowserRouter } from 'react-router-dom'
import FooterBar from './components/FooterBar'
import './static/iconfont/iconfont.css'
import RouterView from './router/index'
import config from './router/config'
// 样式模块化
import styled from 'styled-components';
import store from './store/index'

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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState();
    this.fn = store.subscribe(() => this.storeEvent())
    // console.log(this.fn, 'fn---')
  }

  storeEvent = () => {
    this.setState(store.getState())
  }

  // 卸载生命周期
  componentWillUnmount() {
    this.fn() // 卸载监听订阅函数
  }

  render() {
    return (
      <AppWrapper>
        <BrowserRouter>
        {/* { console.log(this.state, 'state------state') } */}
        { this.state.isShowHeader &&  <HeaderDiv primary>我是头部</HeaderDiv> }
          {/* <HeaderDiv primary>我是头部</HeaderDiv> */}

          <MainDiv>
             <RouterView routes={config}></RouterView>
          </MainDiv>
         { this.state.isShowHeader && <FooterBar />}
          
        </BrowserRouter>
      </AppWrapper>
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
