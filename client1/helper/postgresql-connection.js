const { Pool } = require('pg');

const pool = new Pool({
  user: 'user2',
  host: 'localhost', // 172.26.0.1
  database: 'postgresql-database',
  password: 'P4ssword',
  port: 5436,  // Changed from '5436:5432' to 5436
});

module.exports = pool;