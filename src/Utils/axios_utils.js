import axios from 'axios';
import config from '../../config';
import { getLSisServiceProvider, getLSuserId } from './LocalStorage';
export const axios_backend = axios.create({ baseURL: config.BASE_URL });

axios_backend.interceptors.request.use((config) => {
    
    const token = localStorage.getItem('token');
    const userId = getLSuserId();
    // const isServiceProvider = getLSisServiceProvider()
    if(userId) config.headers['User-Id'] = getLSuserId()
    config.headers['Is-Service-Provider'] = getLSisServiceProvider()
    if(token) config.headers['Access-Token'] = token;
    
    return config
}, (error) => {
    console.log("hii", error);
    Promise.reject(error);
  })