import React, { Component } from 'react'

export default class Dialog extends Component {
  render() {
    return (
      <div className="dialog">
         <div className="mask"></div>
         <div className="tip">
           {this.props.children}
         </div>
      </div>
    )
  }
}
