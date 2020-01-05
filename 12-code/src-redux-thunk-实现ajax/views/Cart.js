import React, { Component } from 'react'
import store from '../store/index'

import { 
  HomeDiv,
} from './styleHome'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState() // 获取redux中的数据
    this.fn = store.subscribe(() => this.hanleStoreEvent() ) // 返回值用来接收监听
  }

  hanleStoreEvent = () => {
    this.setState(store.getState())
  }
 
  // 卸载的生命周期
  componentWillUnmount() {
    this.fn() // 取消监听
  }


  render() {
    // 一旦数据更新，就会重新执行render()
    return (
      <HomeDiv>
       
      </HomeDiv>
    )
  }
}
