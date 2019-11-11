const axios = require('axios');
const strUserData = sessionStorage.getItem('userData');

exports.userData = JSON.parse(strUserData);

exports.isAuthenticated = () => {
    return exports.userData && exports.userData.token ? true : false;
};

exports.signIn = async (userData) => {
    const axiosInstance = axios.create({
        baseURL: "https://localhost:44312"
    });

    const post = await axiosInstance.post("/api/users/authenticate", userData).then((result) => {
        sessionStorage.setItem('userData',  JSON.stringify(result.data));
        return result.data;
    }).catch((err) => {
        throw "E-mail ou senha inválidos";
    });

    return post;
};
