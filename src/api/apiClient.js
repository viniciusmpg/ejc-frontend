const axios = require('axios');

const endpoint = process.env.NODE_ENV == 'development' ? 'http://localhost:9090' : 'https://ejc-node.herokuapp.com';

const axiosInstance = axios.create({
    baseURL: endpoint
});

console.log(`API endpoint: ${endpoint}`);

module.exports = axiosInstance;