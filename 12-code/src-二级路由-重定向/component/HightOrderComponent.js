import React from 'react'
/** 复用复杂逻辑  */
/** 展示型组件  */
/* value  onChange   属性代理  */
/*  react-redux conect()()()()  */

const HightComponent = (options) => (WrappInput) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {...options}
    }

    onChange = (e) => {
      const { inputFn } = this.props;
      const target = e.target
      this.setState(() => ({
        inputvalue: target.value
      }), () => {
        inputFn(this.state.inputvalue)
      })
    }

    render() {
       const newProps = {
          value: this.state.inputvalue,
          onChange: this.onChange
       }
      return <WrappInput {...newProps} {...this.state} />
    }
  }
}

/* ui组件 */
const InputDom = (props) => {
  return <input type="text"  {...props} />
}

/* select  */ 
const selecDom = (props) => {
  return <select type="" {...props} >
          {props.label.map((item, index) => {
            return <option key={index} value={item}>{item}</option>
          })}
        </select>
}


class Top extends React.Component {
  constructor(props) {
    super(props)

    const options = {
      inputvalue: '', // 默认值
      placeholder: '请输入姓名',  // 水印字
      label: ['男', '女'],  //  表单项文本
      isrequire: 'true'  // 是否必填
    }

    this.state = {
      name: '',
      sex: ''
    }

    this.input = HightComponent(options)(InputDom)
    this.select = HightComponent(options)(selecDom)
  }

  render() {
    return (
      <div>
        <this.input inputFn={ (val) => this.handleFn1(val) } />
        <this.select inputFn={ (val) => this.handleFn2(val) } />
        <button onClick={() => { this.handleClick() }}> </button>
      </div>
    )
  }

  handleClick = () => {
    console.log(this.state)
  }

  handleFn1 = (val) => {
    console.log(val, '我是input')
    this.setState({
      name: val
    })
  }

  handleFn2 = (val) => {
    this.setState({
      sex: val
    })
    console.log(val, 'val 我是select')
  }

  /** HightComponent(options)(InputDom) */
  /** HightComponent(options)(selecDom) */


}

export default Top

