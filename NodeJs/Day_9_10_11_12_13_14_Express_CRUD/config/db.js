var mysql = require ('mysql2');

const connection = mysql.createConnection({

    user :'root',
    host:'127.0.0.1',
    password:'',
    database:'sampleuserdata'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        console.log("Database Connection is Failed");
        return;
    }
    else{
        console.log("Database connection is successfull......")
    }
})

module.exports = connection;
