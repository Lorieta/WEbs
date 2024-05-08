const Pool = require('pg').Pool;

const pool = new Pool({
    //default database
    user:"postgres",
    host:"localhost",
    database:"teacher",
    password:"123",
    port:5432,

});
module.exports = pool;