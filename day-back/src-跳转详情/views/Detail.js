import React, { Component } from 'react'
import axios from 'axios'

class Detail extends Component {
  constructor(props) {
     super(props)
     this.state = {
       item: []
     }
  }

  render() {
    console.log('render')
    return (
      <div>
        {
          this.state.item.map(item=> {
            return (
              <dl key={item.id}>
                <dt>
                  <img src={item.img} alt=''/>
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

  componentDidMount() {
    //获取参数
    console.log(this.props.match.params.id, 'match.params')

    axios.get('/api/detail', {
      params: {
        id: this.props.match.params.id
      }
    }).then(res => {
      this.setState({
        item: res.data
      })
      console.log(this.state.item)
    })
  }
}
export default Detail
