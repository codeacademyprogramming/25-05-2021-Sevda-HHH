import { createStore, applyMiddleware } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'
// import logger from 'redux-logger'
import { reducer } from './reducer'

const logger = storeAPI => next => action => {
    console.log('Store before action dispatch:', storeAPI.getState())
    console.log('Action dispatch:', action)
    const result = next(action)
    return result
}

const middelwares = applyMiddleware(logger, reduxThunkMiddleware,)
export const store = createStore(reducer, middelwares)
console.log("store", store);