import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from '../components/TodoItem'

const Home = (props) => {
  const { list, inputValue,handleBtnClick, changeInputValue, deleteItem  } = props;
  return (
    <div>
      <input 
        value={inputValue} 
        onChange={changeInputValue} 
      />
      <button onClick={ handleBtnClick } >提交</button>
      <TodoItem
       list={list}
       deleteItem={(index) => deleteItem(index)}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
   return {
     changeInputValue(e) {
       const action = {
         type: 'change_input_value',
         value: e.target.value
       }
       dispatch(action)
     },

     handleBtnClick() {
       const action = {
         type: 'add_item'
       }
       dispatch(action)
     },

     deleteItem(index) {
       const action = {
         type: 'delete_item',
         index
       }
       dispatch(action)
     }
   }
}

// 返回一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Home)
