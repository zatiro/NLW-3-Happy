import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.17.29.153:3333',
});

export default api;