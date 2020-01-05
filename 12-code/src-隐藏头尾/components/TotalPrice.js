import React, { Component } from 'react'
import store from '../store/index'

export default class TotalPrice extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState();
    this.fn = store.subscribe(() => this.storeEvent())
  }

  storeEvent = () => {
    this.setState(store.getState())
  }

  componentWillUnmount() {
    this.fn()
  }

  render() {
    console.log('render--我是子组件的redner')
    return (
      <div>
         {this.getTotalNum()}
      </div>
    )
  }

  getTotalNum = () => {
    return this.state.list.reduce((num, item) => {
      return num+ item.count * item.price
    }, 0)
  }
}
