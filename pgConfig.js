const Pool = require('pg').Pool;

module.exports = pool = new Pool({
    user: 'nathan',
    host: 'localhost',
    database: 'api',
    password: 'postgres',
    port: 5432
});