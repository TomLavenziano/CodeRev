import axios from 'axios';

const HTTP = axios.create({
    baseURL: `https://0.0.0.0:4430/`,
    headers: {
        // Authorization: 'Bearer {token}'
    }
});

export default HTTP;
