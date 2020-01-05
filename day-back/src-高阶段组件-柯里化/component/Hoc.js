import React from 'react'
/** 复用复杂逻辑  */
/** 展示型组件  */
/* value  onChange   属性代理  */
/*  react-redux conect()()()()  */

const HightOrderComponent = (options) => (WrappInput) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {...options}
    }

    onChange = (e) => {
      const { inputFn } = this.props;
      const target = e.target
      this.setState(() => ({
        initvalue: target.value
      }), () => {
        inputFn(this.state.initvalue)
      })
    }

    render() {
      const newProps = {
        value: this.state.initvalue,
        onChange: this.onChange
      }
      return <WrappInput {...newProps} {...this.state} />
    }
  }
}

/* ui组件 */
const InputDom = (props) => {
  return <input type="text" {...props} />
}

const selecDom = (props) => {
  return <select value={props.value} {...props}>
    { props.label.map((item, index) => {
       return <option key={index} value={item}>{item}</option> 
    }) }
  </select>
}

class Top extends React.Component {
  constructor(props) {
    super(props)
    const options = {
      initvalue: '', // 默认值
      placeholder: '请输入姓名',  // 水印字
      label: ['男', '女'],  //  表单项文本
      isrequire: 'true'  // 是否必填
    }
    

    this.state = {
      name: '',
      sex: '',
      options
    }
    this.input = HightOrderComponent(options)(InputDom)
    this.select = HightOrderComponent(options)(selecDom)
  }

  render() {
    return <div>
      <this.input inputFn={(val) => this.handleFn1(val) } />
      <this.select inputFn={(val) => this.handleFn2(val) } />
      <button onClick={ () => { this.handleClick()  } }>确定</button>
    </div>
  }

  handleFn1(val) {
    this.setState({
      name: val
    })
  }
  handleFn2(val) {
    this.setState({
      sex: val
    })
  }

  handleClick = () => {
    console.log(this.state.options.isrequire === 'true', 'options')
    if (this.state.options.isrequire === 'true') {
      if (this.state.name && this.state.sex) {
        console.log(this.state.name, this.state.sex)
      }
    }
  }
}

export default Top

/* fn('can1', 'can2, 'can3') */

/** fn('can1)('can'2)('can3')  */


