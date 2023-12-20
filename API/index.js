import axios from 'axios';

const IP = '192.168.43.186'
export const axiosInstance = axios.create({ baseURL: `http://192.168.43.186:8000/` });