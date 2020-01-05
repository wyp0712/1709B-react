import React, { Fragment } from 'react'
import { List, Input, Button } from 'antd';
import './App.css'

import store from './store/index'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    // 获取store中的数据
    this.state = store.getState()
    // 监听数据
    store.subscribe(() => this.subscribeStore())
  }
  
  // 监听数据改变，并且设置数据
  subscribeStore = () => {
    this.setState(store.getState())
  }

  render() {
    return (
       <Fragment>
         <Input 
         style={{width:'300px',margin:'10px'}} 
         value={this.state.inputValue} 
         onChange={ (e) => this.handeInputChange(e) } />
         <Button type="primary" onClick={ () => this.handeBtnClick() }>提交</Button>

         <List
            style={{width:'300px',marginLeft:'10px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => <List.Item
             onClick={ () => this.handleDeleteItem(index)  }
            >{item}</List.Item>}
          />
       </Fragment> 
    )
  }

  handeInputChange = (e) => {
    const target = e.target.value
    const action = {
      type: 'input_change_value', // 类型
      target
    }
    store.dispatch(action)
  } 

  handeBtnClick = () => {
    const action = {
      type: 'handle_btn_click',
    }
    store.dispatch(action)
  }


  handleDeleteItem = (index) => {
    const action = {
      type: 'delete_todo_item',
      index
    }
    store.dispatch(action)
  }
}

export default App;



