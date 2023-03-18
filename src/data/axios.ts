import axios from 'axios';


const api_url: string|undefined = process.env.REACT_APP_API_URL

const instance = axios.create({
    baseURL: api_url
});

export default instance;