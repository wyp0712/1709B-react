/**
 * 视图入口文件
 */

import React, { Component,Fragment } from 'react'

import TodoItem from './components/todoItem'

/**
 * 
 * @param { JSX js 和 html混合在一起的一种写法}
 * 
 * 1. 编译成  React.createElement('div', {className: 'a', id: 'b'}, 'hello world')
 * 2. () 在里面写html
 * 3. {} 在里面写js
 * 4. 标签一定要闭合
 * 
 * @param {state: 定义数据的地方}
 * 
 * @param { Input }
 * 
 * @param { 组件传值类型验证 prop-types}
 * 
 * 
 * @param {分拆组件：props接收参数：函数，数组，number}
 * 
 * @param { 受控组件 }
 * 1. value
 * 2. onChange
 * 
 * @param {组件传值：父子: 标签传值 props 子父传值： 回调函数 }
 * 
 * 1. 一个函数 
 * 2. 作为参数
 * 3. 传递到其他函数中
 * 4. 并且执行
 * 
 * 函数执行的时候会把实参 传递给 形参
 * 
 * 
 */

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      list: ['hello world', 'he'],
      inputValue: ''
    }
  }
  render() {
    return (
      <Fragment>
        <input
          value={this.state.inputValue}
          onChange={ (e) => this.handleInputChange(e) } 
        /> 
        <button onClick={ () => this.handleBtnEvent() }>确定</button>
        
        <TodoItem
          list={this.state.list}
          deleteItem={(index) => this.handleDeleteEvent(index)}
        />
      </Fragment>
    )
  }

  handleDeleteEvent(index) {
    // 拷贝数据  然后修改数据，
    const list = [...this.state.list];
    // 修改数据
    list.splice(index, 1);
    // 设置数据
    this.setState({
      list: list
    })
  }

  handleBtnEvent() {
    console.log(this, 'this') 
    const list = [...this.state.list, this.state.inputValue];
    this.setState({
      list: list,
      inputValue: ''
    })
  }

  handleInputChange(e) {
    const target = e.target;
    this.setState(() => ({
      inputValue: target.value
    }))
  }
}

export default App;