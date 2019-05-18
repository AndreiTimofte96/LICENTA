module.exports = (() => {
  const squel = require('squel');
  const { Extension } = require('../../config/pools.js');
  const ApplicationRecord = require('./application_record.js');

  class Preferences extends ApplicationRecord {
    constructor() {
      console.log(Extension); //eslint-disable-line
      super(Extension, 'preferences');
    }

    where({ id, year, month }) {
      let whereClause = squel.expr();

      if (id) {
        whereClause = whereClause.and('user_id = ?', id);
      }

      if (year && month) {
        whereClause = whereClause.and('preference_month = ?', month).and('preference_year = ?', year);
      }

      this.query = this.query.where(whereClause);
      return this;
    }
  }

  return Preferences;
})();
