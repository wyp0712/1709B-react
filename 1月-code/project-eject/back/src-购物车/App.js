import React, { Component, Fragment } from 'react'
import { findDOMNode }  from 'react-dom'
import Dialog from './components/Dialog'
import InputAutoFocus from './components/InputFocus'
import ShopCart from './components/Cart'

class NavItem extends Component {
  render() {
    const { checkAll } = this.props
    return (
        <nav className="nav">
          <input type="checkbox" checked={checkAll} onChange={ () => this.handleChangeCheckAll() } /> 
        </nav>
      )
  }
  handleChangeCheckAll = () => {
    const { checkAllEvent, checkAll } = this.props
    // console.log(checkAll, 'checkall')
    // this.setState({
    //   checkAll: checkAll =! checkAll
    // })
    let flag = checkAll;
    flag = !flag
    checkAllEvent(flag)
  }
}

const ToTalPrice = (props) => {
  return <div>{props.price()}</div>
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          num: 2,
          price: 15,
          title: 'vue',
          isCheck: false
        },
        {
          num: 2,
          price: 25,
          title: 'react',
          isCheck: false
        }
      ],
      isMask: false,
      checkAll: false
    }
  }
  render() {
    return (
      <div className="box">

        <NavItem
          checkAll={this.state.checkAll}
          checkAllEvent={(state) => this.bindCheckAllEvent(state)}
        />

        {/* <InputAutoFocus /> */}
        <ShopCart
          list={this.state.list}
          checkItemEvent={ (index) => this.handleCheckItem(index)}
          removeClick={(index) => this.handleRemove(index)}
          addClick={(index) => this.handleAdd(index)}
        />
        
        <ToTalPrice
         price={() => this.totalPrice()} 
        />
        { this.state.isMask ?  <Dialog ><h1 onClick={ () => this.closeMask()}>我是弹框</h1></Dialog> : "" }
      </div>
    )
  }

  handleCheckItem = (index) => {
    const list = [...this.state.list]
    list[index].isCheck = !list[index].isCheck
    let flag = list.every(val => {
      return val.isCheck
    })
    this.setState({
      list: list,
      checkAll: flag
    })
  }

  bindCheckAllEvent = (state)  => {
    console.log(state, 'state---------state')
    const list = [...this.state.list]
    list.forEach(item => {
      item.isCheck = state
    })
    this.setState({
      list: list,
      checkAll: state
    })
  }

  // total
  totalPrice = () => {
    const list = [...this.state.list]
    let b = list.filter(val => val.isCheck)
    return b.reduce((total, item) => {
      return total + item.price * item.num
    }, 0)
  }

  closeMask = () => {
    this.setState({
      isMask: false
    })
  }

  handleRemove = (index) => {
    const list = [...this.state.list]
    if (list[index].num <=1) {
      this.setState(() => ({
        isMask: true
      }))
      return;
    } else {
      list[index].num--
      this.setState(() => ({
        list: list,
      }))
    }
    this.totalPrice()
  }

  handleAdd = (index) => {
    const list = [...this.state.list]
    list[index].num++
    this.setState(() => ({
      list: list
    }))

    this.totalPrice()
  }

  // 
  componentDidMount() {
    // console.log(findDOMNode(this)) // 
    window.addEventListener('scroll', () => {
      console.log(document.documentElement.scrollTop)
    }) 
  }
}

export default App