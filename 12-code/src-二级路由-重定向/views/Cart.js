import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import store from '../store/index'


export default class Cart extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.fn = store.subscribe(() => this.bindStoreEvent())
  }

  bindStoreEvent = () => {
    this.setState(store.getState())
  }

  componentWillUnmount() {
    this.fn()
  }

  render() {
    return (
      <div>
        cart
        {/* { console.log(this.props.routes, 'this.props.routes') } */}


        {/* { this.state.cartList.map(item => {
           return (
             <div key={item.id}>
               <img src={item.img} alt=''/>
               {item.num}
               {item.nm}
             </div>
           )
        })} */}
      </div>
    )
  }
}
