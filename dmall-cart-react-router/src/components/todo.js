import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { inputValue, list, handleInputChange, handleBtnEvent, handleRemoveEvent } = this.props;
    return (
      <div>
         <input  value={inputValue} 
          onChange={ (e) => { handleInputChange(e) } } 
         />
         <button onClick={ () => handleBtnEvent() }>提交</button>
        <ul>
          {
            list.map((item,index) => {
              return <li key={index}
               onClick={ () => handleRemoveEvent(index) }
              >{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

// 获取数据来源 (找到数据并且把数据映射给props)
const mapStateToProps = (state) => {
  console.log(state, 'state-----state')
   return {
     inputValue: state.todo.inputValue,
     list: state.todo.list
   }
}

// 用户提交action (找行为并且把行为映射给props)
const mapActionToProps = (dispatch) => {
   return {
    handleRemoveEvent(index) {
      const action = {
        type: 'remove_data',
        index
      }
      dispatch(action)
     },
     handleBtnEvent () {
      const action = {
        type: 'add_list',
      }
      dispatch(action)
    },
    handleInputChange(e) {
      const target = e.target;
      const action = {
        type: 'change_input_value',
        inputValue: target.value
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(App)
