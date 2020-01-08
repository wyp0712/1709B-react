import React, { Component } from 'react'

import axios from 'axios'
import '../../mock/index'

export default class componentName extends Component {
  
  state = {
    detailArr: []
  }

  render() {
    return (
      <div className='app-detail'>
         {
           this.state.detailArr && this.state.detailArr.map((item, index) => {
             return <ul key={index}>
               <img  src={item.image} alt=''/>
             </ul>
           })
         }
      </div>
    )
  }

  componentDidMount() {
    const { id } = this.props.location.state;
    console.log(id, 'id')
    // axios.get('/api/detail', {
    //   params: {
    //     id: id
    //   }
    // }).then(res => {
    //    console.log(res, 'res')
    //    this.setState({
    //      detailArr:res.data
    //    })
    // })
    axios.post('/api/detail', {
      id: id
    }).then(res => {
       console.log(res, 'res')
       this.setState({
         detailArr:res.data
       })
    })
  }
}
