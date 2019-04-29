import axios from 'axios';
import { apiRoutes, apiHeaders } from './apiConfig';


const homepageService_get = () => {
  const token = '';
  return axios.get(
    apiRoutes.API_URL + apiRoutes.INTRO,
    { header: apiHeaders(token) },
  );
};

export { homepageService_get };

