import React, { Component } from 'react'
import './App.scss'

import store from './store/index'

export default class App extends Component {
  constructor(props) {
    super(props)
    // 数据从store中获取
    this.state = store.getState()

    // 监听数据变化变化并且进行setstate
    this.fn = store.subscribe(() => this.storeWatch())
  }
  
  // 设置函数
  storeWatch() {
    this.setState(store.getState())
  }

  componentWillUnmount() {
    // 卸载监听
    this.fn()
  }


  render() {
    const { inputValue, list } = this.state;
    return (
      <div>
         
         <input  value={inputValue} onChange={ (e) => { this.handleInputChange(e) } }/>
         <button onClick={ () => this.handleBtnEvent() }>提交</button>
        
        <ul>
          {
            list.map((item,index) => {
              return <li key={index}
               onClick={ () => this.handleRemoveEvent(index) }
              >{item}</li>
            })
          }
        </ul>

      </div>
    )
  }

  handleInputChange = (e) => {
    const target = e.target;
    // this.setState({
    //   inputValue: target.value
    // })
    const action = {
      type: 'change_input_value',
      inputValue: target.value
    }
    store.dispatch(action)
  }

  handleBtnEvent = () => {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    const action = {
      type: 'add_list',
    }
    store.dispatch(action)
  }

  handleRemoveEvent = (index) => {
    // const list = [...this.state.list];
    // list.splice(index, 1) 
    // console.log(list, 'list-----list')
    // this.setState({
    //   list: list
    // })
    const action = {
      type: 'remove_data',
      index
    }  
    store.dispatch(action)
  }
}
