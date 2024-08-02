// database setting up here ....

const { Pool } = require('pg');

const pool = new Pool({
    user: 'tellem_user', 
    host: 'dpg-cqm8v0o8fa8c73cdphqg-a',
    port: '5432',
    database: 'tellem',
    password: '7KR5wcUqzoY3mBMji7MrNbSM5OCA8peC'
});

module.exports = pool;
