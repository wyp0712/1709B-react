import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class dialog extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

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
