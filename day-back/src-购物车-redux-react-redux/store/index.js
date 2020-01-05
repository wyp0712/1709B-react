import { reducerName } from './reducer'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
    reducerName,
    applyMiddleware(thunk)
  )

export default store