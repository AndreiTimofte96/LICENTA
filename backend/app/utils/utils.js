module.exports = (() => {
  const checkReqBodyFields = (object) => new Promise((resolve) => {
    let message = '';
    let status = true;
    Object.keys(object).forEach((key) => {
      if (object[key] === undefined || object[key] === null) {
        message += `${key}, `;
        status = false;
      }
    });

    const response = {
      status,
      res: {
        success: false,
        message: `Campuri incorect trimise: ${message}`
      }
    };
    resolve(response);
  });

  const APP_CONSTS = {
    setPrefFirstDay: 1,
    setPrefLastDay: 25,
  };

  return {
    checkReqBodyFields,
    APP_CONSTS
  };
})();
