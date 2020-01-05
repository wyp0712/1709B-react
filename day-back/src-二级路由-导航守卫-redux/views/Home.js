import React, { Component } from 'react'
// import RouterView from '../router/index'
import store from '../store/index'
// console.log(store, 'store')

export default class Home extends Component {
  constructor(props) {
    super(props)

    // 获取store的状态
    this.state = store.getState()
    // 监听函数
    store.subscribe(this.changeStore)
  }

  changeStore = () => {
    this.setState(store.getState());
  }

  render() {
    return(
      <div>
        <input  value={this.state.inputValue} onChange={ (e) => this.handleInput(e) } />
        <button onClick={ () => this.handleClick() }>确定提交</button>
      </div>
    )
  }

  handleClick = () => {
     
  }

  handleInput = (e) => {
    const action = {
      type: 'input_change_value',
      inputValue: e.target.value
    }
    store.dispatch(action)
  }
}

