import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'
import '../mock/index'

export default class componentName extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  
  componentDidMount() {
    console.log('componentDidMount----home')
    this.getListData() 
  }


  // list 接口
  getListData() {
    axios.get('/api/list').then(res => {
      // console.log(res)
      this.setState({
        list: res.data
      })
      console.log(this.state.list, 'list')
    })
  }
  

  render() {
    // console.log(this.props, 'props---------home')
    return (

      <div className="home">
        {
          this.state.list.map((item, index) => {
            return (
              <dl key={item.id}>
                <dt>
                  <img alt='' onClick={ () => { this.props.history.push(`/detail/${item.id}`) } } src={item.img} />
                </dt>
                <dd>
                   {item.title} 
                </dd>
              </dl>
            )
          })
        }

      </div>
    )
  }
}
