import React, { Component, Fragment } from 'react'
import axios from 'axios'
import store from '../store/index'

export default class Home extends Component {

  constructor(props) {
    super(props)
    
    this.state = store.getState()
    this.fn = store.subscribe(() => this.getStoreEvent())
  }

  getStoreEvent = () => {
    this.setState(store.getState())
  }

  componentWillUnmount() {
    this.fn()
  }

  render() {
    return (
      <div className="box">
        {
          this.state.city.map((item,index) => {
            return (
              <Fragment key={index}>
               <h1 id={item.alpha.toUpperCase()}  key={index}>
                 {item.alpha.toUpperCase()}
               </h1>
                {item.city.map((val, index) => {
                return <div onClick={ () => { this.props.history.push('/cart?city='+ val.city) } } key={index}>{val.city}</div>
                })}
              </Fragment>
            )
          })
        }
        <div className="right">
          {
            this.state.city.map((item, index) => {
              return <a href={'#' + item.alpha.toUpperCase()}  className='alpha' key={index}>
                {item.alpha.toUpperCase()}
              </a>
            })
          }
        </div>
      </div>
    )
  }

  componentDidMount() { // 生命周期请求数据  redux  action {} dispatch
    axios.get('/api/list').then(res => {
      const data = res.data.city;
      const action = {
        type: 'init_city_list',
        data
      }
      store.dispatch(action)
    })
  }
}
