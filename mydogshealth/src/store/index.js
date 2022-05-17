import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer, msgReducer } from "./modules/api/reducers";

const reducers = combineReducers({ 
    login: loginReducer,
    msg: msgReducer,
 });

const store = createStore(reducers, applyMiddleware(thunk));
export default store;