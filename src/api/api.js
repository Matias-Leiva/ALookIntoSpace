import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1',
});

export default {
  getRoversImages(querys) {
    return instance.get(
      `/rovers/${querys.rover}/photos?&page=${querys.page}&api_key=${apiKey}${querys.earth_date ? `&earth_date=${querys.earth_date}` : ''
      }${querys.sol ? `&sol=${querys.sol}` : ''}${querys.camera ? `&camera=${querys.camera}` : ''
      }`,
    );
  },
};
