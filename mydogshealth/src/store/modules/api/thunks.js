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
            console.log("ok", success.data);
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


export const profileThunk = (token, thumb, name, username, city, specialist, association, contact, bio) => (dispatch) => {
    axios.post(API_URL + "profile/", {
        token, thumb, name, username, city, specialist, association, contact, bio,
      }, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((success) => {
            console.log("ok", success.data);
            localStorage.setItem("userdata", JSON.stringify({logged: true, userdata: success.data.userdata}));
        dispatch({ 
            type: LOGIN_OK,
            payload: success.data.userdata,
        });
        dispatch(successMsg("Cadastro atualizado com sucesso!", success.data.message));
    })
    .catch((error) => {
        console.log("error", error.response.data.message);
        dispatch({
            type: REGISTER_ERROR, 
        });
        dispatch(errorMsg("Erro ao atualizar cadastro!", error.response.data.message))
    });
};

// Thunks do banco de dados de doguinhos

export const dogRegisterThunk = (token, thumb, name, breed, gender, birth) => (dispatch) => {
    axios({baseURL: API_URL, url: 'dogs/create/', method: 'post', data: {
          'token': token,
          'thumb': thumb,
          'name': name,
          'breed': breed,
          'gender': gender,
          'birth': birth
        }, headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
            console.log("ok dog", success.data);
           // localStorage.setItem("dogdata", JSON.stringify({status: "updated", list: success.data.dogdata}));
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

export const dogUpdateThunk = (token, id, thumb, name, breed, gender, birth) => (dispatch) => {
    axios({baseURL: API_URL, url: 'dogs/update/', method: 'post', data: {
          'token': token,
          'id': id,
          'thumb': thumb,
          'name': name,
          'breed': breed,
          'gender': gender,
          'birth': birth
        }, headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
            console.log("ok dog", success.data);
           // localStorage.setItem("dogdata", JSON.stringify({status: "updated", list: success.data.dogdata}));
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


export const dogDeleteThunk = (token, id) => (dispatch) => {
    axios({baseURL: API_URL, url: 'dogs/delete/', method: 'post', data: {
          'token': token,
          'id': id,
        }, headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
            console.log("ok dog", success.data);
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
    axios({baseURL: API_URL, url: 'reports/create/', method: 'post', data: {
          'token': token,
          'dogId': dogId,
          'action': action,
          'title': title,
          'notes': notes,
          'date': date
        }, headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
            console.log("ok report", success.data);
           // localStorage.setItem("dogdata", JSON.stringify({status: "updated", list: success.data.dogdata}));
        dispatch({ 
            type: REPORT_UPDATE_OK,
            payload: success.data.reportdata,
        });
        dispatch(successMsg("Doguinho registrado com sucesso!", success.data.message));
    })
    .catch((error) => {
        console.log("error", error, token);
        dispatch({
            type: REPORT_UPDATE_ERROR, 
        });
        dispatch(errorMsg("Erro de registro!", error.response.data && error.response.data.message))
    });
};

export const reportUpdateThunk = (token, reportId, title, description, date) => (dispatch) => {
    axios({baseURL: API_URL, url: 'reports/update/', method: 'post', data: {
          'token': token,
          'reportId': reportId,
          'title': title,
          'description': description,
          'date': date
        }, headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
            console.log("ok report", success.data);
           // localStorage.setItem("dogdata", JSON.stringify({status: "updated", list: success.data.dogdata}));
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

export const reportDeleteThunk = (token, reportId) => (dispatch) => {
    axios({baseURL: API_URL, url: 'reports/delete/', method: 'post', data: {
          'token': token,
          'reportId': reportId,
        }, headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
            console.log("ok report", success.data);
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
    axios({baseURL: API_URL, url: 'user/', method: 'post', data: {
          'token': token
        },headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
            console.log("ok", success.data);
            //localStorage.setItem("userdata", JSON.stringify({logged: true, userdata: success.data.userdata}));
        dispatch({ 
            type: UPDATE_OK,
            payload: success.data.userdata,
        });
    })
    .catch((error) => {
        console.log("error", error, token);
        dispatch({
            type: UPDATE_ERROR, 
        });
        dispatch(errorMsg("Erro de atualização!", error.response.data && error.response.data.message))
    });
};

export const dogdataThunk = (token) => (dispatch) => {
    axios({baseURL: API_URL, url: 'dogs/get/', method: 'post', data: {
          'token': token,
        }, headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
            console.log("ok dog", success.data);
        dispatch({ 
            type: DOG_UPDATE_OK,
            payload: success.data.dogdata,
        });
    })
    .catch((error) => {
        console.log("error", error, token);
        dispatch({
            type: DOG_UPDATE_ERROR, 
        });
        dispatch(errorMsg("Erro de atualização!", error.response.data && error.response.data.message))
    });
};

export const reportdataThunk = (token) => (dispatch) => {
    axios({baseURL: API_URL, url: 'reports/get/', method: 'post', data: {
          'token': token,
        }, headers: { 'Content-Type': 'multipart/form-data' }})
        .then((success) => {
            console.log("ok reports", success.data);
        dispatch({ 
            type: REPORT_UPDATE_OK,
            payload: success.data.reportdata,
        });
    })
    .catch((error) => {
        console.log("error", error, token);
        dispatch({
            type: REPORT_UPDATE_ERROR, 
        });
        dispatch(errorMsg("Erro de atualização!", error.response.data && error.response.data.message))
    });
};
