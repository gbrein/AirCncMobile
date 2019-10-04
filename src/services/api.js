import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.167.68.143:8888'
})

export default api;

