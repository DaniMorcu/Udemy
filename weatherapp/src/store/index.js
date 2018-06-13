import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers/';

const initialState = {
    city: 'Madrid,es'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(city, initialState, applyMiddleware(thunk)); <-- Sin usar la extensión
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));

