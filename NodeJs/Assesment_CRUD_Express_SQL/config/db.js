var mysql = require ('mysql2');

const connection = mysql.createConnection({

    user: 'root',
    password:'',
    host:'127.0.0.1',
    database:'nodejs',
})

// check connect or not 

connection.connect((err)=>{
    if(err){
        console.log(err)
        console.log("Database Connection is Failed");
        return;
    }

    else{
        console.log("Database connection is succefull")
    }
})

module.exports = connection;