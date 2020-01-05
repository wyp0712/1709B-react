import React, { Component } from 'react'
import { Input, Button, List } from 'antd'

import axios from 'axios'
import './mock/index'

/**
 * @param { ref }
 * 
 * 如果在react获取原生dom
 *  ref={ input => this.input = input  }
 * <label htmlFor='input'>收入框</label>
 * 
 * class  className
 * 
 * @param { lable标签中for => htmlFor }
 * 
 * @param { 渲染原生dom结构： dangerouslySetInnerHTML={{__html:item}}  }
 * 
 */

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default class App extends Component {
  
  state = {
    inpueValue: '',
    list: []
  }

  render() {
    return (
      <div>
        <label htmlFor='input'>收入框</label>

        <Input
          style={{ width: '300px',margin: '20px' }}
          placeholder="请输入内容"
          value={this.state.inpueValue} 
          onChange={ (e) => this.handleInputChange(e) } 
        />

        <Button type="primary" 
          onClick={() => this.handleBtnEvent()}
         >确定</Button>

        <List
          style={{width: '300px',marginLeft: '61px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item 
             onClick={() => this.handleRemove(index) }
            >{item}</List.Item>
          )}
        />
      </div>
    )
  }


  handleRemove = (index) => {
    console.log(index, 'index')
    const list = [...this.state.list];
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  componentDidMount() {
    axios.get('/api/list').then(res => {
      console.log(res ,'res')
    })
    // console.log(this.input, 'input')
    // this.input.focus();
    //  const input = document.querySelector('input');
    //  console.log(input, 'input')
    //  input.focus()
  }

  handleInputChange = (e) => {
    const target = e.target;
    this.setState({
      inpueValue: target.value
    })
  }

  handleBtnEvent = () => {
    this.setState({
      list: [...this.state.list, this.state.inpueValue],
      inpueValue: ''
    })
  }
}
