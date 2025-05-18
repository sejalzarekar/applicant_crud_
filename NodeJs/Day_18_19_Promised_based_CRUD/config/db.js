// const mysql = require('mysql2'); 
const mysql = require('mysql2/promise'); 


const pool = mysql.createPool({
    user: 'root',
    host: 'localhost',
    database: 'sampleuserdata',
    password: '',
    port: 3306,
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Connection DB Successfully....');
    }
});

module.exports = pool;
