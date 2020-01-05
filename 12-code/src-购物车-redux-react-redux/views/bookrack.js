import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
         addCartFn, 
         removeCartFn, 
         closeDialog
        } from '../store/actionCreator'

import Dialog from '../components/dialog'

 class BookRack extends Component {
    
  state = {
    list: ['确定', '取消']
  }

  render() {
    return (
      <div className="bookrack-page">
        { this.props.isShowDialog && <Dialog>
           {
             this.state.list.map((item,index) => {
               return <span onClick={ () => { this.props.dialogBtn(index) } } key={index}>{item}</span>
             })
           }
          </Dialog>
        }

        { this.props.bookrack.map((item, index) => {
          return <ul key={index}>
            <li> <img src={item.img} alt=''/> </li> 
            <li>
              <div className="goods-name">{item.name}</div> 
              <div className="cart-btn"> 
                <span onClick={ () => this.props.removeEvent(index) }> - </span>
                <span>  {item.count}</span>
                <span onClick={ () => this.props.addEvent(index) }> +</span>
              </div>
             </li>
          </ul>
        }) }

       { this.totalPrice() ?  <div className="total-btn"> {this.totalPrice()}  元 </div> : '' } 
      </div>
    )
  }

  totalPrice() {
    const { bookrack } = this.props;
    return bookrack.reduce((n, item) =>{
      return n + item.price * item.count
    },0)
  }
}

const mapStateToProps = (state) => {
  return {
    bookrack: state.bookrack,
    isShowDialog: state.isShowDialog
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeEvent(index) {
      const action = removeCartFn(index)
      dispatch(action)
    },
    addEvent(index) {
      const action = addCartFn(index)
      dispatch(action)
    },
    dialogBtn(index) {
      const action = closeDialog(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookRack)
