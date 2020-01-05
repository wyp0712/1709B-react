import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class totalPrice extends Component {
  static propTypes = {
    list: PropTypes.array
  }

  render() {
    return (
      <div className='total-box' ref={ inp => this.inp = inp }>
        { this.getTotalPrice() } K
        </div>
    )
  }

  componentDidMount() {
    this.inp.onclick = function() {
    }
  }

  // 属性表示法
  getTotalPrice = () => {
    // reduce 的第二个参数跟回调函数中的第一个参数相等
    let arr = this.props.list.filter(val => val.isCheck) 
    return arr.reduce((total, item) => {
        return total + item.price * item.count
    }, 0)
  }
}
