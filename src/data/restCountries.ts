import axios from './axios';

const RESPONSE_OK: number = 200;

class RestCountriesService {
    getAllData = () => new Promise((resolve, reject) => {
        axios.get('/all?fields=name,region,area').then((response) => {
            if (response.status == RESPONSE_OK) resolve(response.data);
            else reject(response.status);
        }).catch((error)=>{
            reject(error);
        });
    });
}

const restCountriesService = new RestCountriesService();

export default restCountriesService;