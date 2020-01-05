import React, { Component } from 'react'

export default class dialog extends Component {

  render() {
    console.log(this.props, '')
    return (
      <div className='dialog'>
         <div className='mask'></div>
         <div className='tip'>
           { this.props.children }
         </div>
      </div>
    )
  }
}
