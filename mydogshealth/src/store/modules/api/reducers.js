import { REGISTER_OK, REGISTER_ERROR, LOGIN_OK, LOGIN_ERROR, LOGOUT } from "./actionTypes";
import { SHOW_MSG, CLEAR_MSG } from "./actionTypes";

const userdata = JSON.parse(localStorage.getItem("userdata"))
const loginState = userdata ? { logged: true, userdata } : { logged: false, userdata: null };
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
      case LOGIN_OK:
        return {
          ...state,
          logged: true,
          userdata: payload,
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