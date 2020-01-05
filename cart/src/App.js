import React, { Component } from 'react';
import Dialog from './components/dialog'

import HeaderBar from './components/headerBar'
import CartCom from './components/cart'
import TotalPrice from './components/totalPrice'

import axios from 'axios';
import './mock/index'

/**
 * @param {组件}
 * 
 * @param {children}
 * 
 * 1. 在组件标签中间输入的元素可以在 子组件内部通过this.props.children访问到
 *  <Dialog>     </Dialog>
 * 
 * @param { 受控组件 }
 * 1. value 
 * 2. checked
 * 3. onChange 
 * 
 */

class App extends Component {
  state = {
    list: [],  
    btnMsg: ['确定', '取消'],
    isDialog: false,
    removeIndex: 0,
    checkAll: false,
  }

  render() {
    return (
      <div className="App">
        <button className='btns' onClick={() => { this.removeAll() }}>确定删除所有</button>
        {/* 弹框组件调用区域 */}
        {
         this.state.isDialog && <Dialog>
           {
             this.state.btnMsg.map((item, index) => {
               return <span 
                onClick={ () => this.removeDialog(index) }
               key={index}>{item}</span>
             })
           }
         </Dialog>
        }
        
        {/* 头部组件引入 */}
        <HeaderBar 
         checkAll={this.state.checkAll}
         checkAllEvent = { () => { this.handleCheckAll() } }
        />

        {/* 购物车list组件 */}

        <CartCom 
         list={this.state.list}
         checkItem={ (index) => this.handleCheckItem(index)  } 
         removeEvent= { (index) => this.bindRemove(index)}
         addEvent={ (index) => this.bindAdd(index) }
        />

        <TotalPrice 
         list={this.state.list}
        />
         
      </div>
    );
  }

  removeAll = () => {
    const list = [...this.state.list];
    const arr = list.filter((item, index) => {
      return item.isCheck !== true
    })

    this.setState({
      list: arr
    }, () => {
      if (this.state.list.length === 0) {
        this.setState({
          checkAll: false
        })
      }
    })
  }

  componentDidMount() {
    axios.get('/api/cart').then(res => {
      this.setState({
        list: res.data
      })
    })
  }
  
  // 总按钮选中事件
  handleCheckAll = () => {
    // 拷贝数据  修改数据，数据赋值
    let flag = this.state.checkAll;
    flag = !flag
    const list = [...this.state.list];
    list.forEach((item, index) => {
      item.isCheck = flag
    })
    this.setState({
      checkAll: flag,
      list: list
    }) 

  }
  
  // checkbox的单选事件
  handleCheckItem = (index) => {
    const list = [...this.state.list];
    list[index].isCheck = !list[index].isCheck
    // 单选事件，利用every ，一个为false，全为false，全为true ,才返回true
    let flag = list.every((item, index) => {
      return item.isCheck
    })
    
    this.setState({
      list: list,
      checkAll: flag
    })
  }

  // 取消蒙层事件
  removeDialog = (index) => {
    console.log(index) 
    if (index === 0) {
      // 删除数据
      // console.log(this.state.removeIndex, '我是即将要删除的数据')
      // 拷贝数据
      const list = [...this.state.list];
      if (list[this.state.removeIndex].isCheck) {
        // 修改数据
        list.splice(this.state.removeIndex, 1)

        // 判断数据是否删除干净了，如果删除干净了，就将总的按钮置为false
        if (list.length === 0) {
          this.setState({
            checkAll: false
          })
        }
        
        // 数据赋值 删除数据赋值
        this.setState({
          list: list
        })
      } else {
        alert('请选中数据')
      }


    }
    // 什么不干,直接取消蒙层
    // 不管0还是1都要执行下面这个代码
    this.setState({
      isDialog: false
    })
  }


  // --
  bindRemove = (index) => {
     // 拷贝数据 修改数据，
     const list = [...this.state.list];
     // 点击--按钮。就给全局的删除下标绑定上数值;
     this.setState({
       removeIndex: index
     })

     if (list[index].count <=1) {
       // 当产品减到1的时候，给用户提示弹出框
       this.setState({
         isDialog: true
       })
      return
     } else {
      list[index].count--;
      this.setState({
        list: list
      })
     }
  }
  
  // ++ 
  bindAdd = (index) => {
    const list = [...this.state.list];
    list[index].count++;
    this.setState({
      list: list
    })
  }


}

export default App;
