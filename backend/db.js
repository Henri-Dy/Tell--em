// database setting up here ....

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    port: '5432',
    database: 'tellem',
    password: 'azerty1234'
});

module.exports = pool;
