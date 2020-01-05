import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { list } = this.props
    return (
      <ul>
        {
          list.map((item, index) => {
            return <li style={{lineHeight:'45px'}} onClick={() => this.deleteItem(index)} key={index}>{item}</li>
          })
        }
      </ul>
    )
  }

  deleteItem = (index) => {
    const { deleteItem } = this.props;
    deleteItem(index)
  }
}
