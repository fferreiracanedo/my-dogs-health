import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { dogReducer, loginReducer, msgReducer, reportReducer } from "./modules/api/reducers";

const reducers = combineReducers({ 
    user: loginReducer,
    msg: msgReducer,
    dog: dogReducer,
    report: reportReducer,
 });

const store = createStore(reducers, applyMiddleware(thunk));
export default store;