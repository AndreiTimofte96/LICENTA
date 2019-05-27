import axios from 'axios';
import { apiRoutes, apiHeaders } from '../../utils/services/apiConfig';


const userPreferencesService_get = () => {
  const token = localStorage.getItem('ntm-token');
  return axios.get(
    `${apiRoutes.API_URL}${apiRoutes.GET_USER_PREFERENCES}`,
    { headers: apiHeaders(token) },
  );
};

const userPreferencesService_put = (body) => {
  const token = localStorage.getItem('ntm-token');
  return axios.put(
    `${apiRoutes.API_URL}${apiRoutes.GET_USER_PREFERENCES}`,
    body,
    { headers: apiHeaders(token) },
  );
};


const newPasswordService_put = (body) => {
  const token = localStorage.getItem('ntm-token');
  return axios.put(
    `${apiRoutes.API_URL}${apiRoutes.RESET_PASSWORD}`,
    body,
    { headers: apiHeaders(token) },
  );
};

export {
  userPreferencesService_get,
  userPreferencesService_put,
  newPasswordService_put,
};

