const axios = require('axios');
const userAuth = require('../api/userAuthentication');

const endpoint = process.env.NODE_ENV == 'development' ? 'https://localhost:44312/api' : 'https://ejc-node.herokuapp.com';

const axiosInstance = axios.create({
    baseURL: endpoint
});

axiosInstance.interceptors.request.use(function (config) {
    if (userAuth.isAuthenticated())
        config.headers.Authorization = userAuth.userData.token;

    return config;
});

console.log(`API endpoint: ${endpoint}`);

module.exports = axiosInstance;