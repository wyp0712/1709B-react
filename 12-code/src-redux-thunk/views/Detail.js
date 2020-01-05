import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import store from '../store/index'
import styled from 'styled-components'

const BackDiv = styled.div`
  width: 35px;
  height: 35px;
  background: skyblue;
  text-align:center;
  line-height: 35px;
  border-radius:50%;
`;

export default class Detail extends Component {
  static propTypes = {

  }

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
      <div>
        详情
        <BackDiv onClick={ () => { this.props.history.go(-1) } } >back</BackDiv>
      </div>
    )
  }
}
