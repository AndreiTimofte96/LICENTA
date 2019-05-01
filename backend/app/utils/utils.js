module.exports = (() => {
  const checkReqBodyFields = (object) => new Promise((resolve) => {
    let message = '';
    let status = true;
    Object.keys(object).forEach((key) => {
      if (object[key] === undefined || object[key] === null || object[key].length === 0) {
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

  return {
    checkReqBodyFields
  };
})();
