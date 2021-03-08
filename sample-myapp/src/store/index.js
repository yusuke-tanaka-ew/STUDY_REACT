import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {
    routerReducer ,
    routerMiddleware
} from 'react-router-redux';
import userReducer from '../reducers/user'



function createStore(history){
    return reduxCreateStore(
        combineReducers({
            users:userReducer,
            router : routerReducer,
        }),
        applyMiddleware(
            routerMiddleware(history)
        )
    )
}



export default createStore;