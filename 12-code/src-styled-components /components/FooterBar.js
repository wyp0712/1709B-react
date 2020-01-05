import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FooterBar = styled.div`
  width: 100vw;
  height: 45px;
  display:flex;
  background: skyblue;
  a {
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;
    display:flex;
    flex-direction:column;
    i {
      flex:6;
      display:flex;
      justify-content: center;
      align-items: center;
    }
    span {
      flex:4;
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }
  .active {
    color:red;
  }
`;


export default () => {
  return (
    <FooterBar>
      <NavLink to="/home">
        <i className="iconfont">&#xe602;</i>
        <span>首页</span>
      </NavLink>
      <NavLink to="/cart">
        <i className="iconfont">&#xe602;</i>
        <span>首页</span>
      </NavLink>
      <NavLink to="/vip">
        <i className="iconfont">&#xe602;</i>
        <span>首页</span>
      </NavLink>
    </FooterBar>
  )
}