import { createStore } from 'redux'
import {  } from 'redux-thunk'

const defaultValue = {
   inputValue: '',
   list: []
}

const reduce = (state = defaultValue, action) => {

  if (action.type === 'input_change_value') {
    const newState = {...state}
    newState.inputValue = action.inputValue
    // console.log(newState, 'newState')
    return newState
  }

  return state
}


const store = createStore(reduce)

export default store



