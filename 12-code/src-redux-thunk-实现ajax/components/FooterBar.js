import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import store from '../store/index'

export default class FooterBar extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState();
    this.fn = store.subscribe(() => this.storeEvent())
  }

  componentWillUnmount() {
    this.fn()
  }

  storeEvent = () => {
    this.setState(store.getState())
  }

  shouldComponentUpdate(nextProps) {
    return true
  }

  render() {
    return (
      <FootDiv>
        <NavLink to='/home'>
          <span>国内</span>
        </NavLink>
        <NavLink to='/cart'>
          <span>国际</span>
        </NavLink>
      </FootDiv>
    )
  }
}



const FootDiv = styled.div`
  width: 100vw;
  height: 45px;
  display:flex;
  background: skyblue;
  a {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  .active {
    color: red;
  }
`;