import { REGISTER_OK, REGISTER_ERROR, LOGIN_OK, LOGIN_ERROR, LOGOUT } from "./actionTypes";
import { SHOW_MSG, CLEAR_MSG } from "./actionTypes";
import axios from "axios";

const API_URL = "http://localhost/www/mydogshealth/api/";

export const register2 = (email, password) => {
  axios.post(API_URL + "register/", {
    email,
    password,
  });
};

export const successMsg = (title, msg) => ({
    type: SHOW_MSG,
    payload: {
        title: title,
        description: msg,
        status: 'success',
        duration: 4000,
        isClosable: true,
      },
});

export const errorMsg = (title, msg) => ({
    type: SHOW_MSG,
    payload: {
        title: title,
        description: msg,
        status: 'error',
        duration: 4000,
        isClosable: true,
      },
});

export const warningMsg = (title, msg) => ({
    type: SHOW_MSG,
    payload: {
        title: title,
        description: msg,
        status: 'warning',
        duration: 4000,
        isClosable: true,
      },
});

export const infoMsg = (title, msg) => ({
    type: SHOW_MSG,
    payload: {
        title: title,
        description: msg,
        status: 'info',
        duration: 4000,
        isClosable: true,
      },
});

export const clearMsg = () => ({
    type: CLEAR_MSG,
    payload: null,
});


