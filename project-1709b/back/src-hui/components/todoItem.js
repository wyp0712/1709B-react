import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  static propTypes = {
    list: PropTypes.array,
  }

  render() {
    return (
        <ul>
          { this.props.list.map((item, index) => {
            return <li
            onClick={() => this.handleDeleteEvent(index)} 
            key={index}>{item}</li>
          }) }
      </ul>
    )
  }

  handleDeleteEvent(index) {
    const { deleteItem } = this.props;
    deleteItem(index)
  }
}
