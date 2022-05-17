import { REGISTER_OK, REGISTER_ERROR, LOGIN_OK, LOGIN_ERROR, LOGOUT } from "./actionTypes";
import { successMsg, errorMsg, warningMsg, infoMsg } from "./actions";
import axios from "axios";

const API_URL = "https://www.vanderhaegen.com.br/mydogshealth/api/";

export const registerThunk = (email, password) => (dispatch) => {
    axios.post(API_URL + "register/", {
        email,
        password,
      }, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((success) => {
            console.log("ok", success.data.message);
        dispatch({ 
            type: REGISTER_OK,
        });
        dispatch(successMsg("Cadastro efetuado com sucesso!", success.data.message));
    })
    .catch((error) => {
        console.log("error", error.response.data.message);
        dispatch({
            type: REGISTER_ERROR, 
        });
        dispatch(errorMsg("Erro de cadastro!", error.response.data.message))
    });
};

export const loginThunk = (email, password) => (dispatch) => {
    axios.post(API_URL + "login/", {
        email,
        password,
      }, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((success) => {
            console.log("ok", success.data.message);
            localStorage.setItem("userdata", JSON.stringify({logged: true, userdata: success.data.userdata}));
        dispatch({ 
            type: LOGIN_OK,
            payload: success.data.userdata,
        });
        dispatch(successMsg("Login efetuado com sucesso!", success.data.message));
    })
    .catch((error) => {
        console.log("error", error.response.data.message);
        dispatch({
            type: LOGIN_ERROR, 
        });
        dispatch(errorMsg("Erro de login!", error.response.data.message))
    });
};

export const logoutThunk = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
        payload: null,
    });
    localStorage.clear();
    dispatch(infoMsg("Logout efetuado com sucesso!", "Acesse a página de login para retornar à plataforma."));
};