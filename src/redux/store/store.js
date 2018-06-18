// SETTING UP REDUX-LOGGER
import { applyMiddleware, createStore } from 'redux';

// Logger with default options
import logger from 'redux-logger';

// CREATING STORE
import { rootReducer } from "../reducers/reducers";
const initialState = {}
const store = createStore(rootReducer, initialState, applyMiddleware(logger)); // should I pass initial state at all?
// https://redux.js.org/api-reference/combinereducers
console.log("REDUX STATE INITIALIZED", store.getState())

export { store };