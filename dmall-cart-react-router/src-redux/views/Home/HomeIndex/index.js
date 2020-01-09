import React, { Component } from 'react'

import axios from 'axios'
import '../../../mock/index'
// import store from '../../../store/index'

import { connect } from 'react-redux'

 class HomeIndex extends Component {
  
  

  constructor(props) {
    super(props)

    // this.state = store.getState()
    // this.fn = store.subscribe(() => this.subWatch())
  }

  componentWillUnmount() {
    // this.fn() // 取消监听
  }

  subWatch(){
    // this.setState(store.getState())
  }

  render() {
    return <div className='home-index'>
      {
        this.props.initData && this.props.initData.map((item, index) => {
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
               <span onClick={() => this.props.handleAdd(item) }>+</span> 
              </li>
            </ul>
        })
      }
    </div>
  }
  componentDidMount() {
    this.props.getMockData()
  }
}


const mapStateToProps = (state) => {
  return {
    initData: state.initData
  }
}

const mapActionToProps = (dispatch) => {
  return {
    getMockData() {
      axios.get('/api/list').then(res => {
        console.log(res.data.list)
        const action = {
          type: 'init_cart_data',
          data: res.data.list
        }
        dispatch(action)
      })
    },
    handleAdd(item) {
      const action = {
        type: 'to_cart',
        item
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(HomeIndex)