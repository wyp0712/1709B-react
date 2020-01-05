import React, { Component } from 'react'

class ShopCart extends Component {
  render() {
    const { list } = this.props
    return (
      <div className="list">
        {
          list.map((item, index) => {
            return (
              <div key={index}>

                <input type="checkbox" 
                  checked={item.isCheck}
                  onChange={() => this.handleCheckItem(index)}
                />

                <span className="goods"> {item.price* item.num} {item.title} </span>
                <span className="cart">
                  <span className="remove" onClick={() => this.handleRemove(index)}>-</span>
                  <span> {item.num} </span>
                  <span className="add" onClick={() => this.handleAdd(index)}>+</span>
                </span>
                <hr />
              </div>
            )
          })
        }
    </div>
    )
  }

  handleCheckItem = (index) => {
    // console.log(index, 'index')
    const { checkItemEvent } = this.props
    checkItemEvent(index)
  }
  
  handleRemove = (index) => {
    const { removeClick } = this.props
    removeClick(index)
  }

  handleAdd = (index) => {
    const { addClick } = this.props
    addClick(index)
  }
}

export default ShopCart