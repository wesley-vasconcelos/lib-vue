import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://cdn.apicep.com',
    timeout: 5000,
});

export default ({ app }, inject) => {
    // Fix SSR issue with axios and nuxt
    if (process.server) {
        axiosInstance.defaults.adapter = (config) => {
            const https = require('https');
            config.httpsAgent = new https.Agent({ rejectUnauthorized: false });
            return axiosInstance(config);
        };
    }

    inject('axios', axiosInstance);
};