module.exports = (() => {
  const squel = require('squel');
  const { Extension } = require('../../config/pools.js');
  const ApplicationRecord = require('./application_record.js');

  class Preferences extends ApplicationRecord {
    constructor() {
      console.log(Extension); //eslint-disable-line
      super(Extension, 'preferences');
    }

    where({ id }) {
      let whereClause = squel.expr();

      if (id) {
        whereClause = whereClause.and('user_id = ?', id);
      }

      this.query = this.query.where(whereClause);
      return this;
    }
  }

  return Preferences;
})();
