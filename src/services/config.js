import axios from 'axios';

const BASE_URL = 'https://animals.free.beeceptor.com/';

const API = axios.create({
    baseURL: BASE_URL
});

export default API;