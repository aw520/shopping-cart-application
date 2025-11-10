// TODO: Set up Axios request and response interceptors
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
})

api.interceptors.request.use(
  (config) => {
    const token = 'dummy-auth-token';
    config.headers.Authorization = token;
    return config;
  }
)

api.interceptors.response.use(
  (response) =>{
    console.log(response);
    return response;
  },

  (error)=>{
    console.error('Response error:', error.response?.data || error.message);
    return Promises.reject(error);
  }
)

export default api;