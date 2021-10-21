import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/uiReducer';
import { buttonReducer } from '../reducers/buttonReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const reducers = combineReducers({

    auth:authReducer,
    ui:uiReducer,
    button:buttonReducer,

});

export const store = createStore( 
    reducers,
    composeEnhancers(
    applyMiddleware( thunk )
    )
);