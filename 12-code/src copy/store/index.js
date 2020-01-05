
import { reducerName } from './reducer'; // export 
import { createStore, applyMiddleware } from 'redux'
import thunk from './node_modules/redux-thunk'

const store = createStore(
    reducerName,
    applyMiddleware(thunk)
  )

export default store