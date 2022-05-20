import { REGISTER_OK, REGISTER_ERROR, LOGIN_OK, LOGIN_ERROR, LOGOUT, UPDATE_OK, UPDATE_ERROR,
         DOG_UPDATE_OK, DOG_UPDATE_ERROR, REPORT_UPDATE_OK, REPORT_UPDATE_ERROR } from "./actionTypes";
import { SHOW_MSG, CLEAR_MSG } from "./actionTypes";

const userdata = JSON.parse(localStorage.getItem("userdata"))
const dogdata = JSON.parse(localStorage.getItem("dogdata"))
const reportdata = JSON.parse(localStorage.getItem("reportdata"))

const loginState = userdata && userdata.profile
    ? { ...userdata, status: "updating" }
    : { logged: false, status: "", profile: null };
export const loginReducer = (state = loginState, action) => {
    const { type, payload } = action;
    switch (type) {
      case REGISTER_OK: 
        localStorage.clear();
        return {
            ...state,
            registered: true,
            logged: false,
        };
      case REGISTER_ERROR:
        localStorage.clear();
        return {
          ...state,
          logged: false,
        };
      case LOGIN_OK: 
        localStorage.setItem("userdata", JSON.stringify({logged: true, status: "updating", profile: payload}));
        return {
          ...state,
          logged: true,
          status: "updating",
          profile: payload,
        };
      case UPDATE_OK:
            localStorage.setItem("userdata", JSON.stringify({logged: true, status: "updated", profile: payload}));
            return {
          ...state,
          logged: true,
          status: "updated",
          profile: payload,
        };
        case UPDATE_ERROR:
            return {
          ...state,
          status: "outdated",
        };
      case LOGIN_ERROR: //fall-through
      case LOGOUT:
        localStorage.clear();
        return {
          ...state,
          logged: false,
          profile: null,
          registered: false,
        };
      default:
        return state;
    }
}

const dogState = dogdata ? { ...dogdata, status: "updating" } : {status: "updating", list: []};
export const dogReducer = (state = dogState, action) => {
    const { type, payload } = action;
    switch (type) {
      case DOG_UPDATE_OK: 
        localStorage.setItem("dogdata", JSON.stringify({status: "updated", list: payload}));
        return {
            status: "updated",
            list: payload,
        };
      case DOG_UPDATE_ERROR:
        localStorage.setItem("dogdata", JSON.stringify({...state, status: "outdated"}));
        return {
            ...state,
            status: "outdated",
        };
      default:
            return state;
    }
}

const reportState = reportdata ?  { ...reportdata, status: "updating" } : {status: "updating", list: []};
export const reportReducer = (state = reportState, action) => {
    const { type, payload } = action;
    switch (type) {
      case REPORT_UPDATE_OK: 
      localStorage.setItem("reportdata", JSON.stringify({status: "updated", list: payload}));
        return {
            status: "updated",
            list: payload,
        };
      case REPORT_UPDATE_ERROR:
        localStorage.setItem("reportdata", JSON.stringify({...state, status: "outdated"}));
        return {
          status: "outdated",
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