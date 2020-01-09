import React, { Component } from 'react'

import axios from 'axios'
import '../../../mock/index'
import store from '../../../store/index'

export default class HomeIndex extends Component {
  
  

  constructor(props) {
    super(props)

    this.state = store.getState()
    this.fn = store.subscribe(() => this.subWatch())
  }

  componentWillUnmount() {
    this.fn() // 取消监听
  }

  subWatch(){
    this.setState(store.getState())
  }

  render() {
    return <div className='home-index'>
      {
        this.state.cartData && this.state.cartData.map((item, index) => {
          return <ul key={item.id}>
             <li> <img 
             onClick={ () => { this.props.history.push({
               pathname: '/detail',
               state: {
                 id: item.id
               }
             }) } }
             src={item.image} alt=''/> </li>
             <li>
               <span onClick={() => this.handleAdd(index) }>+</span> 
               <span>{item.count} </span> 
               <span onClick={() => this.handleRemove(index) }>-</span> 
              </li>
            </ul>
        })
      }
    </div>
  }
  componentDidMount() {
  }

  handleAdd(index) {
    console.log(index, 'index')
    const action = {
      type: 'add_cart',
      index
    }
    store.dispatch(action)
  }

  handleRemove(index) {
    console.log(index, 'index')
    const action = {
      type: 'remove_cart',
      index
    }
    store.dispatch(action)
  }
}
