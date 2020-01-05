import React from 'react'
/** 复用复杂逻辑  */
/** 展示型组件  */
/* value  onChange   属性代理  */

function HightComponent(WrappInput) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        inputValue: ''
      }
    }

    onChange = (e) => {
      const { inputFn } = this.props;
      const target = e.target
      this.setState(() => ({
        inputValue: target.value
      }), () => {
        inputFn(this.state.inputValue)
      })
    }
    render() {
       const newProps = {
         name: {
          value: this.state.inputValue,
          onChange: this.onChange
         }
       }
      return <WrappInput {...newProps} {...this.props} />
    }
  }
}

/* ui组件 */
const InputDom = (props) => {
  // console.log(props, 'props')
  return <input type="text"  {...props.name} />
}
export default HightComponent(InputDom)