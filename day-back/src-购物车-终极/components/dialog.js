import React from 'react'

const Dialog = (props) => {
  return (
    <div className="dialog">
        <div className="mask"></div>
        <div className="tip">
          { props.children }
        </div>
    </div>
  )
}

export default Dialog
