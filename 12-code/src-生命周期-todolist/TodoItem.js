import React, { Component } from 'react'
// import PropTypes from 'prop-types';

class TodoItem extends Component {
  // 静态属性  说明可以在类的外部 访问  TodoItem.propTypes    TodoItem.defaultProps
  UNSAFE_componentWillReceiveProps() {
    // console.log('UNSAFE_componentWillReceiveProps, 接收生命周期') 
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return false
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    // console.log(this.props, '我是父组件传过来值')
    console.log('我是子组件的render函数')
    return (
      <li
       onClick={this.handleClick.bind(this)} 
       > {this.props.item} </li>
    )
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index)
  }
}

// TodoItem.propTypes = {
//   item: PropTypes.string
// }
// 设置默认值
// TodoItem.defaultProps = {

// }




export default TodoItem;