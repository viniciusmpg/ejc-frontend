var axios = require('axios');

var axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV == 'development' ? 'http://localhost:9090' : 'https://ejc-node.herokuapp.com'
});

module.exports = axiosInstance;