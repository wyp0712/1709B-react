import React, { Component } from 'react';
import Dialog from './components/dialog'

/**
 * @param {组件}
 * 
 * @param {children}
 * 
 * 1. 在组件标签中间输入的元素可以在 子组件内部通过this.props.children访问到
 *  <Dialog>     </Dialog>
 * 
 * 
 */

class App extends Component {
  
  state = {
    list: [
      {
        id: 0,
        name: '前端工程师',
        price: 20,
        count: 1,
        img: '/img/1.jpg',
        isCheck: false
      },
      {
        id: 0,
        name: '后端工程师',
        price: 13,
        count: 1,
        img: '/img/2.jpg',
        isCheck: false
      }
    ],  
    btnMsg: ['确定', '取消'],
    isDialog: false,
    removeIndex: 0,
    allCheck: false,
  }

  render() {
    return (
      <div className="App">
        <input type='checkbox' 
          checked={this.state.allCheck}
          onChange={ () => this.handleAllCheck()  } />
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
         {
          this.state.list.map((item,index) => {
            return <ul key={index}>
             <li className='left'> 
               <input type='checkbox'  />
               <img src={item.img} alt='' /> 
              </li>   
              <li className='right'>
               <div className='right-name'> {item.name} {item.count * item.price} K </div>
               <div className='right-btn'>
                 <span 
                  onClick={ () => this.bindRemove(index) }
                 >-</span>
                 <span>{item.count}</span> 
                 <span
                  onClick={ () => this.bindAdd(index) }
                 >+</span> 
               </div>
              </li>
            </ul>
          })
         }

         <div className='total-box'>
         { this.getTotalPrice() } K
         </div>
         
      </div>
    );
  }

  handleAllCheck = () => {
    this.setState({
      allCheck: this.allCheck = !this.allCheck
    })

  }

  // 取消蒙层事件
  removeDialog = (index) => {
    console.log(index) 
    if (index === 0) {
      // 删除数据
      console.log(this.state.removeIndex, '我是即将要删除的数据')
      // 拷贝数据
      const list = [...this.state.list];
      // 修改数据
      list.splice(this.state.removeIndex, 1)
      // 数据赋值
      this.setState({
        list: list
      })
    }
    // 什么不干,直接取消蒙层
    // 不管0还是1都要执行下面这个代码
    this.setState({
      isDialog: false
    })
  }

  // 属性表示法
  getTotalPrice = () => {
    // reduce 的第二个参数跟回调函数中的第一个参数相等
    return this.state.list.reduce((total, item) => {
      return total + item.price * item.count
    }, 0)
  }

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

  bindAdd = (index) => {
    const list = [...this.state.list];
    list[index].count++;
    this.setState({
      list: list
    })
  }


}

export default App;
