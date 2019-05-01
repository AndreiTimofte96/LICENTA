import axios from 'axios';
import { apiRoutes, apiHeaders } from '../../utils/services/apiConfig';


const checkSession_get = (token) => {
  return axios.get(
    apiRoutes.API_URL + apiRoutes.USER_ME,
    { headers: apiHeaders(token) },
  );
};

export { checkSession_get };

