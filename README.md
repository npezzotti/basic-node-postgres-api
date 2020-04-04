# Node.js Postgres Example API

## Steps to set up:

1. Install Postgresql and nodejs if not already
2. Clone this repository and cd into the root directory
3. run `npm i`
4. run `createdb api`
5. run `touch pgConfig.js` and enter the following content:
    ```
    const Pool = require('pg').Pool;

    module.exports = pool = new Pool({
          user: '<your_username>',
          host: 'localhost',
          database: '<database_name>',
          password: '<your_password>',
          port: 5432
    });
    ```
6. run `node app.js`
