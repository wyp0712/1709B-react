import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAddCart, getRemoveCart } from '../../../store/actionCreator'

class HomeCart extends Component {
  render() {
    const { cartData, handleAddCart,handleRemoveCart } = this.props;
    return (
      <div className='app-home'>
        {
          cartData.map((item,index) => {
            return <ul key={index}>
               <li> <img src={item.img} alt=''/> </li>
               <li>
                  <span
                   onClick={ () => handleRemoveCart(index) }
                  > - </span>
                  <span>{item.count}</span>
                  <span
                   onClick={ () => handleAddCart(index) }
                  >+</span>
                </li>
            </ul>
          })
        }
      </div>
    )
  }
}

// state

const mapStateToProps = (state) => {
  return {
    // 取出在homeIndex页面中添加数据 
    cartData: state.cartData
  }
}

const mapActionToProps = (dispatch) => {
  return {
    // 添加给购物车
    handleAddCart(index) {
      const action = getAddCart(index)
      dispatch(action)
    },
    handleRemoveCart(index) {
      const action = getRemoveCart(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(HomeCart)
