import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import callScreenReducer from './callScreenReducer';
import authReducer from './authReducer';
import chatReducer from './chatReducer';

let reducers = combineReducers({
    callScreen: callScreenReducer,
    auth: authReducer,
    chat: chatReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

window.store = store;

export default store;