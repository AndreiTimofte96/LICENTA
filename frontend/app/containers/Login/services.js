import axios from 'axios';
import { apiRoutes, apiHeaders } from '../../utils/services/apiConfig';


const loginService_post = (body) => {
  return axios.post(
    apiRoutes.API_URL + apiRoutes.LOGIN,
    body,
    { header: apiHeaders() },
  );
};

export { loginService_post };

