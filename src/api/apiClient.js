var axios = require('axios');

const endpoint = process.env.NODE_ENV == 'development' ? 'http://localhost:9090' : 'https://ejc-node.herokuapp.com';

var axiosInstance = axios.create({
    baseURL: endpoint
});

console.log(`API endpoint: ${endpoint}`);

module.exports = axiosInstance;