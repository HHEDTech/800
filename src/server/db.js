const { Pool } = require('pg');

const PG_URI = `postgres://bjjovtlq:8WFDsE3xlPRTJqM2nRMrA0GEierKXPQO@ruby.db.elephantsql.com:5432/bjjovtlq`;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params = [], callback = null) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
