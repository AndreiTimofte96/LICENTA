const apiRoutes = {
  API_URL: 'http://0.0.0.0:2222',
  LOGIN: '/authenticate',
  USER_ME: '/api/userMe',
  GET_TIMETABLE: '/api/getTimetable',
  GET_USER_PREFERENCES: '/api/userPreferences',
};

const apiHeaders = (token) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token && token.length > 0) {
    headers['x-access-token'] = token;
  }
  return headers;
};

export {
  apiRoutes,
  apiHeaders,
};
