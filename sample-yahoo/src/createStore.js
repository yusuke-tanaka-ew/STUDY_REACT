
import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import * as reducers from './reducers';
import {
    routerReducer,
    routerMiddleware
} from 'react-router-redux';

//Create Store & apply middleware
export default function createStore(history){
    return reduxCreateStore(
    combineReducers({
        ...reducers,
        router : routerReducer
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history)
    )
  )
}