const apiRoutes = {
  API_URL: 'http://0.0.0.0:2222',
  INTRO: '/intro',
};

const apiHeaders = (token) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token && token.length > 0) {
    headers['X-Access-Token'] = token;
  }
  return headers;
};

export {
  apiRoutes,
  apiHeaders,
};
