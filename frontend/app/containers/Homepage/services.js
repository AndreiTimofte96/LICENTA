import axios from 'axios';
import { apiRoutes, apiHeaders } from '../../utils/services/apiConfig';

const homepageService_get = () => {
  const token = localStorage.getItem('ntm-token');
  return axios.get(
    `${apiRoutes.API_URL}${apiRoutes.GET_HOMEPAGE}`,
    { headers: apiHeaders(token) },
  );
};

export { homepageService_get };

