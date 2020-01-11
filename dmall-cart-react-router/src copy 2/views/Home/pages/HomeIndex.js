import React, { Component } from 'react'
import axios from 'axios'
import '../../../mock/index'

import { connect } from 'react-redux'
import { getData, getToCart  } from '../../../store/actionCreator'

class HomeIndex extends Component {
  render() {
    const { initData, bindAdd } = this.props;
    return (
      <div className='app-home'>
        {
          initData.map((item,index) => {
            return <ul key={index}>
               <li> <img src={item.img} alt=''/> </li>
               <li>
                  <span>{item.name}</span>
                  <span
                   onClick={ () => bindAdd(item) }
                  >+</span>
                </li>
            </ul>
          })
        }
        
      </div>
    )
  }

  componentDidMount() {
    this.props.getCartData()
  }
}

const mapStateToProps = (state) => {
  return {
    initData: state.initData
  }
}

const mapActionToProps = (dispatch) => {
  return {
    // 请求数据
    getCartData() {
      const action = getData()
      dispatch(action)
    },
    // 添加给购物车
    bindAdd(item) {
      const action = getToCart(item)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(HomeIndex)
