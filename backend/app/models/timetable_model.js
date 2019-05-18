module.exports = (() => {
  const squel = require('squel');
  const { Extension } = require('../../config/pools.js');
  const ApplicationRecord = require('./application_record.js');

  class Timetable extends ApplicationRecord {
    constructor() {
      console.log(Extension); //eslint-disable-line
      super(Extension, 'timetable');
    }

    where({ year, month }) {
      let whereClause = squel.expr();
      if (year && month) {
        whereClause = whereClause.and('month = ?', month).and('year = ?', year);
      }

      this.query = this.query.where(whereClause);
      return this;
    }
  }
  return Timetable;
})();
