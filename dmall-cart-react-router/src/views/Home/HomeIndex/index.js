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
        this.state.initData && this.state.initData.map((item, index) => {
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
               <span>{item.count} </span>
               <span onClick={() => this.handleAdd(item) }>+</span> 
              </li>
            </ul>
        })
      }
    </div>
  }
  componentDidMount() {
    this.getMockData()
  }

  getMockData() {
    axios.get('/api/list').then(res => {
      console.log(res.data.list)
      const action = {
        type: 'init_cart_data',
        data: res.data.list
      }
      store.dispatch(action)
    })
  }

  handleAdd(item) {
    console.log(item, 'index')
    const action = {
      type: 'to_cart',
      item
    }
    store.dispatch(action)
  }
}
