import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class headerBar extends Component {
  static propTypes = {
    checkAll: PropTypes.bool, // 布尔值验证
    checkAllEvent: PropTypes.func
  }

  render() {
    return (
      <div className='header'>
         <input type='checkbox' 
            checked={this.props.checkAll} 
            onChange={ () => { this.handleCheckAll() } }
         />
         购物车

      </div>
    )
  }

  handleCheckAll = () => {
    let { checkAllEvent } = this.props;
    checkAllEvent()
  }
}
