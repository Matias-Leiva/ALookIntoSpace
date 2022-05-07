import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

const instance = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1',
});


export const getRoversImages = function (querys) {
    return instance.get(`/rovers/${querys.rover}/photos?&page=${querys.page}&api_key=${api_key}${querys.sol ? '&sol=' + querys.sol : ''}${querys.camera ? '&camera=' + querys.camera : ''}`);
}