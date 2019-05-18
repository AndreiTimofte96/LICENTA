import axios from 'axios';
import { apiRoutes, apiHeaders } from '../../utils/services/apiConfig';


const timetableService_get = (month, year) => {
  const token = localStorage.getItem('ntm-token');
  return axios.get(
    `${apiRoutes.API_URL}${apiRoutes.GET_TIMETABLE}/${month}/${year}`,
    { headers: apiHeaders(token) },
  );
};

export { timetableService_get };

