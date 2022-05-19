import { REGISTER_OK, REGISTER_ERROR, LOGIN_OK, LOGIN_ERROR, UPDATE_OK, UPDATE_ERROR, LOGOUT,
         DOG_UPDATE_OK, DOG_UPDATE_ERROR, REPORT_UPDATE_OK, REPORT_UPDATE_ERROR } from "./actionTypes";
import { successMsg, errorMsg, warningMsg, infoMsg } from "./actions";
import axios from "axios";

const API_URL = "https://www.vanderhaegen.com.br/mydogshealth/api/";
//const API_URL = "http://localhost/www/mydogshealth/api/";

export const registerThunk = (email, password) => (dispatch) => {
    axios.post(API_URL + "register/", {
        email,
        password,
      }, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((success) => {
        dispatch({ 
            type: REGISTER_OK,
        });
        dispatch(successMsg("Cadastro efetuado com sucesso!", success.data.message));
    })
    .catch((error) => {
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
        dispatch({ 
            type: LOGIN_OK,
            payload: success.data.userdata,
        });
        dispatch(successMsg("Login efetuado com sucesso!", success.data.message));
    })
    .catch((error) => {
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


export const profileThunk = (token, thumb, name, username, city, specialist, association, contact, bio) => (dispatch) => {
    axios.post(API_URL + "profile/", {
        token, thumb, name, username, city, specialist, association, contact, bio,
      }, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((success) => {
            console.log("userdata ok", success.data);
        dispatch({ 
            type: UPDATE_OK,
            payload: success.data.userdata,
        });
    })
    .catch((error) => {
        console.log("error", error.response.data.message);
        dispatch({
            type: REGISTER_ERROR, 
        });
        dispatch(errorMsg("Erro ao atualizar dados!", error.response.data.message))
    });
};

// Thunks do banco de dados de doguinhos

export const dogRegisterThunk = (token, thumb, name, breed, gender, birth) => (dispatch) => {
    axios.post(API_URL + "dogs/create/", { 
          token, thumb, name, breed, gender, birth
        }, { headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
        dispatch({ 
            type: DOG_UPDATE_OK,
            payload: success.data.dogdata,
        });
        dispatch(successMsg("Doguinho registrado com sucesso!", success.data.message));
    })
    .catch((error) => {
        console.log("error", error, token);
        dispatch({
            type: DOG_UPDATE_ERROR, 
        });
        dispatch(errorMsg("Erro de registro!", error.response.data && error.response.data.message))
    });
};

export const dogUpdateThunk = (token, dogId, thumb, name, breed) => (dispatch) => {
    axios.post(API_URL + 'dogs/update/', {
          token, dogId, thumb, name, breed
        }, { headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
        dispatch({ 
            type: DOG_UPDATE_OK,
            payload: success.data.dogdata,
        });
        dispatch(successMsg("Dados atualizados com sucesso!", success.data.message));
    })
    .catch((error) => {
        console.log("error", error, token);
        dispatch({
            type: DOG_UPDATE_ERROR, 
        });
        dispatch(errorMsg("Erro de registro!", error.response.data && error.response.data.message))
    });
};


export const dogDeleteThunk = (token, dogId) => (dispatch) => {
    axios.post(API_URL + 'dogs/delete/', {
            token, dogId,
        }, { headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
        dispatch({ 
            type: DOG_UPDATE_OK,
            payload: success.data.dogdata,
        });
        dispatch(successMsg("Dados atualizados com sucesso!", success.data.message));
    })
    .catch((error) => {
        console.log("error", error, token);
        dispatch({
            type: DOG_UPDATE_ERROR, 
        });
        dispatch(errorMsg("Erro de registro!", error.response.data && error.response.data.message))
    });
};


// Thunks do banco de dados de anotações médico veterinárias

export const reportRegisterThunk = (token, dogId, action, title, notes, date) => (dispatch) => {
    axios.post(API_URL + 'reports/create/', {
          token, dogId, action, title, notes, date
        }, { headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
        dispatch({ 
            type: REPORT_UPDATE_OK,
            payload: success.data.reportdata,
        });
        dispatch(successMsg("Dados atualizados com sucesso!", success.data.message));
    })
    .catch((error) => {
        dispatch({
            type: REPORT_UPDATE_ERROR, 
        });
        dispatch(errorMsg("Erro de registro!", error.response.data && error.response.data.message))
    });
};

export const reportUpdateThunk = (token, reportId, notes) => (dispatch) => {
    axios.post(API_URL + 'reports/update/', {
          token, reportId, notes
        }, { headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
        dispatch({ 
            type: REPORT_UPDATE_OK,
            payload: success.data.reportdata,
        });
        dispatch(successMsg("Dados atualizados com sucesso!", success.data.message));
    })
    .catch((error) => {
        dispatch({
            type: REPORT_UPDATE_ERROR, 
        });
        dispatch(errorMsg("Erro de registro!", error.response.data && error.response.data.message))
    });
};

export const reportDeleteThunk = (token, reportId) => (dispatch) => {
    axios.post(API_URL + 'reports/delete/', {
          token, reportId,
        }, { headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
        dispatch({ 
            type: REPORT_UPDATE_OK,
            payload: success.data.reportdata,
        });
        dispatch(successMsg("Dados atualizados com sucesso!", success.data.message));
    })
    .catch((error) => {
        console.log("error", error, token);
        dispatch({
            type: REPORT_UPDATE_ERROR, 
        });
        dispatch(errorMsg("Erro de registro!", error.response.data && error.response.data.message))
    });
};


// Thunks de atualização aplicados ao recarregamento da aplicação

export const userdataThunk = (token) => (dispatch) => {
    axios.post(API_URL + 'user/', {
          token
        }, { headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
            console.log("userdata ok", success.data);
        dispatch({ 
            type: UPDATE_OK,
            payload: success.data.userdata,
        });
    })
    .catch((error) => {
        console.log("userdata error", error);
        dispatch({
            type: UPDATE_ERROR, 
        });
        dispatch(errorMsg("Erro de atualização!", error.response.data && error.response.data.message))
    });
};

export const dogdataThunk = (token) => (dispatch) => {
    axios.post(API_URL + 'dogs/get/', {
          token,
        }, { headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
            console.log("dogdata ok", success.data);
        dispatch({ 
            type: DOG_UPDATE_OK,
            payload: success.data.dogdata,
        });
    })
    .catch((error) => {
        console.log("dogdata error", error);
        dispatch({
            type: DOG_UPDATE_ERROR, 
        });
        dispatch(errorMsg("Erro de atualização!", error.response.data && error.response.data.message))
    });
};

export const reportdataThunk = (token) => (dispatch) => {
    axios.post(API_URL + 'reports/get/', {
          token,
        }, { headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
            console.log("reportdata ok", success.data);
        dispatch({ 
            type: REPORT_UPDATE_OK,
            payload: success.data.reportdata,
        });
    })
    .catch((error) => {
        console.log("reportdata error", error);
        dispatch({
            type: REPORT_UPDATE_ERROR, 
        });
        dispatch(errorMsg("Erro de atualização!", error.response.data && error.response.data.message))
    });
};
