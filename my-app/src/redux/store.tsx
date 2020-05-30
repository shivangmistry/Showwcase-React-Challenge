import { createStore } from 'redux'

// import rootReducer from './rootReducer'
import userReducer from './reducer/reducers'

// const store = createStore(rootReducer);
const store = createStore(
    userReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;