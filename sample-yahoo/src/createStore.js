
import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import {
    routerReducer,
    routerMiddleware
} from 'react-router-redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

//Create Store & apply middleware
export default function createStore(history){
    return reduxCreateStore(
    combineReducers({
        ...reducers,
        router : routerReducer
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history),
      thunk
    )
  )
}