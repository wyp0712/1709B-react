import React, { Component } from 'react'

import axios from 'axios'
import '../../../mock/index'

export default class componentName extends Component {
  
  state = {
    list: []
  }

  render() {
    return <div className='home-index'>
      {
        this.state.list.map((item, index) => {
          return <ul key={item.id}>
             <li> <img 
             onClick={ () => { this.props.history.push({
               pathname: '/detail',
               state: {
                 id: item.id
               }
             }) } }
             src={item.image} alt=''/> </li>
             <li> <span>{item.name} </span> <span>+</span> </li>
            </ul>
        })
      }
    </div>
  }
  componentDidMount() {
    axios.get('/api/list').then(res => {
      console.log(res, 'res')
      this.setState({
        list: res.data.list
      })
    })
  }
}
