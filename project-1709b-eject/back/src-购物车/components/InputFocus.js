import React from 'react'

/**
 * @function [需求1:进入页面获取焦点]
 * @function [需求2:点击按钮失去焦点]
 * 
 * @param { focus() blur() }  
 * @param {原生dom的事件} 
 * 
 * @param {思路：获取原生dom,并且事件}
 * 
 * @param {1. 加在dom元素上ref 2. 加在组件上}
 * 
 */

// class AutoFocusTextInput extends React.Component {
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.props.inputRef} />
//       </div>
//     )
//   }

//   componentDidMount() {
//   }
// }

const AutoFocusTextInput = (props) => {
  return (
    <div>
      <input type="text" ref={props.inputRef} />
    </div>
  )
}


class InputAutoFocus extends React.Component {
  render () {
    return (
      <div>
        <AutoFocusTextInput  inputRef={ el => this.inputElement = el } />
        {/* <AutoFocusTextInput  ref={ (input) => this.inputDom = input }  /> */}
        {/* <input type="text" ref={ (input) => this.inputDom = input } /> */}

        <button>点击获取</button>
      </div>
    )
  }
  componentDidMount() {
    // console.log(this.inputDom.focus(), 'inputDom')
    console.log(this.inputElement.focus(), 'inputDom')
  }
}

export default InputAutoFocus

