import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class App extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  state = {
    list: [
      {
        id: 0,
        name: '前端工程师',
        price: 20,
        count: 1,
        img: '/img/1.jpg',
        isCheck: false, // 是否选中
      },
      {
        id: 1,
        name: '后端工程师',
        price: 13,
        count: 1,
        img: '/img/2.jpg',
        isCheck: false, // 是否选中
      }
    ],
    totalCheck: false,
  }

  render() {
    return (
      <div className='shop-cart'>
        <input type='checkbox' className='totalCheck' 
         checked={this.state.totalCheck}
         onChange={() => this.handleTotalCheck()}
        />
        {
          this.state.list.map((item, index) => {
            return (
            <ul key={index}>
             
              <li className='left'> 
                <input type='checkbox' /> 
                <img src={item.img} alt={item.name}/> 
              </li>
              <li className='right'>
                <div className='des'>{item.name} 总价：{item.count * item.price} K</div>
                <div className='btn-box'>
                  <span className='btn-remove'
                   onClick={() => this.handleRemoveBtn(index)}
                  >-</span>
                  <span className='btn-count'>{item.count}</span>
                  <span className='btn-add'
                   onClick={() => this.handleAddBtn(index)}
                  >+</span>
                </div>
              </li>
            </ul>
            )
          })
        }

        <div> { this.getTotalPrice() } </div>
      </div>

    )
  }

  handleTotalCheck = () => {
    let flag = this.state.totalCheck;

    flag = !flag
    this.setState({
      totalCheck: flag
    })
  }

  getTotalPrice = () => {
    return this.state.list.reduce((num, next) => {
      return num + next.count * next.price
    }, 0)
  }

  handleRemoveBtn = (index) => {
    const list = [...this.state.list];
    if (list[index].count <=1) {
      return
    } else {
      list[index].count--;
      this.setState({
        list: list
      })
    }
  }

  handleAddBtn = (index) => {
    const list = [...this.state.list];
    list[index].count++;
    this.setState({
      list: list
    })
  }
}
