import { combineReducers, createStore, applyMiddleware } from "redux";
import ResuxThunk from 'redux-thunk';
import tableReducer from './reducers/tableReducer';

const middlewares = [ResuxThunk];

const reducer = combineReducers({
    tableReducer,
})

export default createStore(reducer, {}, applyMiddleware(...middlewares));