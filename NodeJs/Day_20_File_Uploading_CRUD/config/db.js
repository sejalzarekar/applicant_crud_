const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    user:'root',
    password:'',
    host:'localhost',
    database:'sampleuserdata'
});

pool.getConnection((err,result)=>{
    if(err){
        console.log(err);
        console.log('DB is not connected');
    }
    else{
        console.log('DB is connected successfully');
    }
})


module.exports = pool;
