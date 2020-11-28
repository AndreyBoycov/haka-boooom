const axios = require("axios");

const httpConfig = axios.create({
    baseURL: 'http://localhost:8081',
    responseType: 'json'
});

const http = (config) => {
    return new Promise((resolve, reject) => {
        httpConfig(config).then(res => {
            resolve({
                result: 'success',
                response: res.data
            });
        }).catch(err => {
            const status = err.response ? err.response.status : err.status;
            const message = err.response ? err.response.statusText : err.message;

            reject({
                result: 'failure',
                response: {
                    errorCode: status,
                    description: message
                }
            });
        });
    });
}

export default http;
