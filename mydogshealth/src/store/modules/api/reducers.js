import { REGISTER_OK, REGISTER_ERROR, LOGIN_OK, LOGIN_ERROR, LOGOUT, UPDATE_OK, UPDATE_ERROR,
         DOG_UPDATE_OK, DOG_UPDATE_ERROR, REPORT_UPDATE_OK, REPORT_UPDATE_ERROR } from "./actionTypes";
import { SHOW_MSG, CLEAR_MSG } from "./actionTypes";

const userdata = JSON.parse(localStorage.getItem("userdata"))
const loginState = userdata ? { ...userdata, status: "updating" } : { logged: false, status: "loading", userdata: null };
export const loginReducer = (state = loginState, action) => {
    const { type, payload } = action;
    switch (type) {
      case REGISTER_OK: 
        return {
            ...state,
            registered: true,
            logged: false,
        };
      case REGISTER_ERROR:
        return {
          ...state,
          logged: false,
        };
      case LOGIN_OK: //fall-through
      case UPDATE_OK:
            return {
          ...state,
          logged: true,
          status: "updated",
          userdata: payload,
        };
        case UPDATE_ERROR:
            return {
          ...state,
          status: "outdated",
        };
      case LOGIN_ERROR: //fall-through
      case LOGOUT:
        return {
          ...state,
          logged: false,
          userdata: null,
          registered: false,
        };
      default:
        return state;
    }
}


const dogdata = JSON.parse(localStorage.getItem("dogdata"))
const dogState = dogdata ? { ...dogdata, status: "updating" } : {status: "loading", list: []};
export const dogReducer = (state = dogState, action) => {
    const { type, payload } = action;
    switch (type) {
      case DOG_UPDATE_OK: 
        return {
            status: "updated",
            list: payload,
        };
      case DOG_UPDATE_ERROR:
        return {
          status: "outdated",
          loaded: false,
        };
      default:
        return state;
    }
}

const reportdata = JSON.parse(localStorage.getItem("reportdata"))
const reportState = reportdata ?  { ...dogdata, status: "updating" } : {status: "loading", list: []};
export const reportReducer = (state = reportState, action) => {
    const { type, payload } = action;
    switch (type) {
      case REPORT_UPDATE_OK: 
        return {
            status: "updated",
            list: payload,
        };
      case REPORT_UPDATE_ERROR:
        return {
          status: "outdated",
          loaded: false,
        };
      default:
        return state;
    }
}



const msgState = {};
export const msgReducer = (state = msgState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SHOW_MSG:
            return { toast: payload };
        case CLEAR_MSG:
            return { };
        default:
            return state;
    }
}