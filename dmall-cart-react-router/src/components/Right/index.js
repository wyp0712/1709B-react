import React, { Component } from 'react'
import { connect } from 'react-redux'

class RightCom extends Component {
  render() {
    const { rightArr } = this.props;
    return (
      <div>
        {
          rightArr.length && rightArr.map((item, index) => {
            return <h1 key={index}>{item.city}</h1>
          })
        }
      </div>
    )
  }
}

// 获取数据
const mapStateToProps = (state) => {
   return {
     rightArr: state.rightArr
   }
}

// 提交action 行为
const mapActionToProps = (dispatch) => {
   return {
 
   }
}

export default connect(mapStateToProps, mapActionToProps)(RightCom)

