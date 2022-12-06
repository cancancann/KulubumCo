import axios from 'axios';
const BASE_URL = 'http://localhost:4000/api/';


const API = axios.create({ baseURL: BASE_URL ,withCredentials:true});

const api = {
  auth: {
    register: (data) => API.post('/auth/register', data),
    login: (data) => API.post('/auth/login', data),
    forgotPassword: (data) => API.post('/auth/forgotPassword', data),
    resetPassword: (data) => API.post('/auth/', data),
  },
};

export default api;
