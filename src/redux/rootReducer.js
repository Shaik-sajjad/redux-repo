import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceReducer from './ice/iceReducer'
import userReducers from './user/userReducers'

const rootReducer = combineReducers({
    cake:cakeReducer,
    ice:iceReducer,
    user:userReducers

})
export default rootReducer