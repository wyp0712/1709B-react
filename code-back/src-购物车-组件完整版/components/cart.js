import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class cart extends Component {
  static propTypes = {
    list: PropTypes.array,
    checkItem: PropTypes.func,
    removeEvent: PropTypes.func,
    addEvent: PropTypes.func
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item,index) => {
            return <ul key={index}>
             <li className='left'> 
               <input  type='checkbox' checked={item.isCheck}  
                onChange={ () => this.handleCheckItem(index) }
               />
               <img src={item.img} alt='' /> 
              </li> 
              <li className='right'>
               <div className='right-name'> {item.name} {item.count * item.price} K </div>
               <div className='right-btn'>
                 <span
                  onClick={ () => this.bindRemove(index) }
                 >-</span>
                 <span>{item.count}</span> 
                 <span
                  onClick={ () => this.bindAdd(index) }
                 >+</span> 
               </div>
              </li>
            </ul>
          })
         }
      </div>
    )
  }

  handleCheckItem = (index) => {
    let { checkItem } = this.props;
    checkItem(index)
  }

  bindRemove = (index) => {
    let { removeEvent } = this.props;
    removeEvent(index)
  }

  bindAdd = (index) => {
    let { addEvent } = this.props;
    addEvent(index)
  }
}
