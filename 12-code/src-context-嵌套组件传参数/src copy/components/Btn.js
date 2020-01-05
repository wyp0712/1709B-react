import React from 'react'
import Context from '../utils/index'

class BtnCom extends React.Component {
  render() {
    return <div>
      <Context.Consumer>
        {
          (value) => {
            console.log('Btn接收到了值:', value);
            /* 不能在这里用setState保存接收的value */
            /* 否则会死循环 */
            /* 对于接收到value,一般的处理方式: 立即渲染 */
            return (
              <h2>{value}</h2>
            )
          }
        }
      </Context.Consumer>
    </div>
  }
}

export default BtnCom