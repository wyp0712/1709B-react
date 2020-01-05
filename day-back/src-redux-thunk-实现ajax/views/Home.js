import React, { Component } from 'react'
import store from '../store/index'
import {
          getAddCartItem,
          getRemoveCartItem,
          initCartList
         } from '../store/actionCreator'
         
// import HomeList from '../components/HomeList'

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
    const { list, rightList } = this.state;
    return (
      <div className="inland">
        <div className="left">
          {
            list.inland && list.inland.map((item,index) => {
              return <span onClick={ () => this.handleTabClick(index) } key={index}>{item.pro}</span>
            })
          }
        </div>
        <div className="right">
           { rightList.map((item, index) => {
              return <span key={index}>{item.city}</span>
            })
           }
        </div>
      </div>
    )
  }

  handleTabClick = (index) => {
    const data = this.state.list.inland[index].children
    const action = {
      type: 'get_right_list',
      data
    }
    store.dispatch(action)
  }

  componentDidUpdate() {

  }
  
  // 请求数据
  componentDidMount() { // 在当前组件中，这个只执行一次，但是路由切换之后每次都会调用
    console.log('componentDidMount')
    // action  init_cart_list  // 数据都教给redux去管理修改
    if (!this.state.list.length) {
      const action = initCartList()
      store.dispatch(action)
    }

    // this.handleTabClick(this.state.list.inland[0].children)


    // console.log(this.state.list.inland, 'inland')
  }

  // ++
  hanleAddEvent = (index) => {
    const action = getAddCartItem(index)
    store.dispatch(action)
  }
  
  // --
  handleRemoveEvent = (index) => {
    const action = getRemoveCartItem(index)
    store.dispatch(action)
  }

}
