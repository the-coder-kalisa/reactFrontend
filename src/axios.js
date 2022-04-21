import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://tinderreactbackend.herokuapp.com/'
});
export default instance;