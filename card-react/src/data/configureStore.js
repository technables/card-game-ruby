import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './reducer/index'

const logger = createLogger();

export default function configureStore(initialState){
    return createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
}