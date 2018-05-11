import axios from 'axios';

const HTTP = axios.create({
    baseURL: `https://lvh.me:4430/`,
    withCredentials: true,
    crossOrigin: true
    // headers: {
    //     // 'Access-Control-Allow-Origin': 'https://lvh.me:4430',
    //     // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    // }
});

export default HTTP;
