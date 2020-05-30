import { combineReducers } from 'redux'

import userReducer from './reducer/reducers'

const rootReducer = combineReducers({ 
    user: userReducer 
});

export default rootReducer;