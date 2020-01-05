import React,{ Fragment } from 'react'

const PullUpDialog = (props) => {
  return (
    <Fragment>
      <div className="dialog">
        <div className="mask"></div>
        <div className="tip">
          { props.children }
        </div>
      </div>
    </Fragment>
  )
}

export default PullUpDialog
