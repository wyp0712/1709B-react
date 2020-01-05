import React, { Component } from 'react'
import Context from '../utils/index'

class Title extends Component {
  render() {
    return <span>
      <Context.Consumer>
        {
          (val) => {
            console.log(val, '我是app传下来的值')
            return <h1>{val}</h1>
          }
        }
      </Context.Consumer>
    </span>
  }
}

export default Title