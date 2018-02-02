import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import issues from './issues'
import comments from './comments'


const rootReducer = combineReducers({ issues, comments })


export default createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(thunk))

