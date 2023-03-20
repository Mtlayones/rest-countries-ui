import axios from 'axios';


const api_url: string|undefined = import.meta.env.VITE_API_URL

const instance = axios.create({
    baseURL: api_url
});

export default instance;