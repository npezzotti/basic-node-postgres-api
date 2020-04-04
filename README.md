# Node.js Postgres Example API

## Steps to set up:

1. Install PostgreSQL and node.js if not already
2. Clone this repository and cd into the project root directory
3. run `npm i`
5. run `psql -d postgres -U <your_user>
6. run `CREATE DATABASE api;`
7. run `\c api`
8. run `api=> CREATE TABLE users (ID SERIAL PRIMARY KEY, name VARCHAR(30), email VARCHAR(30));`
9. Enter sample data (optional) and exit psql with control-d
5. run `touch pgConfig.js` and enter the following content:

    ```
    const Pool = require('pg').Pool;

    module.exports = pool = new Pool({
          user: '<your_username>',
          host: 'localhost',
          database: 'api',
          password: '<your_password>',
          port: 5432
    });
    ```
    
6. run `node app.js`
