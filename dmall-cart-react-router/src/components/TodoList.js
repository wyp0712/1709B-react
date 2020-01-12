import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    const { inputValue,list,removeItem, handleInputChange, handleBtnClick } = this.props
    return <Fragment> 

        <input value={inputValue} onChange={ (e) => handleInputChange(e) }/>
        
        <button 
         onClick={ () => handleBtnClick() }
        >提交</button>

        <ul>
          {
            list.map((item, index) => {
              return <li
              onClick={ () => removeItem(index) }
              key={index}>{item}</li>
            })
          }
        </ul>
        
       </Fragment>
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapActionToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const target = e.target;
      const action = {
        type: 'input_change',
        value: target.value
      }
      dispatch(action)
    },
    handleBtnClick() {
      const action = {
        type: 'add_list'
      }
      dispatch(action)
    },
    removeItem(index) {
      const action = {
        type: 'remove_item',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(TodoList);