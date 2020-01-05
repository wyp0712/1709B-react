import React from 'react'

class Dialog extends React.Component {
  render() {
    // console.log(this.props.children)
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

export default Dialog