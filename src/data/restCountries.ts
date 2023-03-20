import { CountriesModel, CountryModel } from './models';
import axios from '../utils/axios';

const RESPONSE_OK: number = 200;

class RestCountriesService {
    getAllData = () => new Promise((resolve, reject) => {
        axios.get('/all?fields=name,region,area,flag').then((response) => {
            if (response.status == RESPONSE_OK) resolve(new CountriesModel(response.data));
            else reject(response.status);
        }).catch((error)=>{
            reject(error);
        });
    });

    getLithuaniaData = () => new Promise((resolve, reject) => {
        axios.get('/name/Lithuania?fields=name,region,area,flag').then((response) => {
            if (response.status == RESPONSE_OK) resolve(new CountryModel().fromJson(response.data[0]));
            else reject(response.status);
        }).catch((error)=>{
            reject(error);
        });
    });
}

const restCountriesService = new RestCountriesService();

export default restCountriesService;