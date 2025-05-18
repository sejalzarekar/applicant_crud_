var express = require ('express');
const app = express();

const PORT= 3000 || process.env.PORT;
const HOST= '127.0.0.1';

// middleware

// static file server 
app.use(express.static('public/'));

// url package middleware for get method
var url = require('url');

// accesing the data in body for post method 
app.use(express.urlencoded({extended:true}));

// json data 
app.use(express.json());

// import connection
var connection= require('./config/db')


// route setting 
app.get('/', (req,res)=>{
    res.render('home.ejs');
})

app.post('/saveform', (req,res) =>{
    // res.send('form submitted succesfully');

    // object Destructuring 
    const {userName,userEmail,userPass}= req.body;

    var sql = `insert into users(userName, userEmail, userPass) values ('${userName}','${userEmail}', '${userPass}')`
    const result = connection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            console.log("Data Faild to insert")
        }

        else {
            console.log(result)
            console.log("Data Inserted Successfully...")
        }
        // console.log(result);
        // res.send(`

        // <h2>Emp Name - ${userName}</h2>
        // <h2>Emp EMail - ${userEmail}</h2>
        // <h2>Emp Password - ${userPass}</h2>
        // `)

        res.redirect('/userdata')

    })

})

app.get('/userdata', (req,res)=>{
    var sql = `select * from users`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log("Data Not fetched")
            console.log(err)
        }

        else {
            console.log("Data Fetched Successfully...")
            // console.log(result)
            // Data Traversing
            const obj= { data: result }

            res.render('userdata.ejs',obj)

        }
    })
})

app.listen(PORT,HOST,()=>{
    console.log(`Server is up.........`)
})