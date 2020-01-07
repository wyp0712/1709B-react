import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div>
        首页
        { console.log(this.props) }

        <button onClick={ () => {
           this.props.history.push({
             pathname: '/detail',
             state: {
               id: 1
             }
           })
        } } >跳转详情页面</button>
      </div>
    )
  }


  componentDidMount() {

  }
}
