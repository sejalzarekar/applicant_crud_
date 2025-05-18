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

// mysql connection 
var connection = require('./config/db');
const { parse } = require('path');


// route setting 
app.get('/', (req,res)=>{
    res.render('home.ejs');
})

app.post('/saveform',(req,res)=>{
    // res.send("form submitted succesfullyy");
    const {empName, empEmail, empPass, empRole} = req.body;
    var sql = `insert into emp(empName, empEmail,empPass, empRole) values ('${empName}','${empEmail}','${empPass}','${empRole}')`;
    const result= connection.query(sql,(err,result)=>{
        if(err){
            console.log("data is not inserted...");
            console.log(err);
        }
        else{
            console.log('data inserted succesfully');
            console.log(result);
        }
    })
    res.redirect('/allemp');
    // res.send(`
    //     <h2>Emp Name : ${empName}</h2>
    //     <h2>Emp Email : ${empEmail}</h2>
    //     <h2>Emp Pass : ${empPass}</h2>
    //     <h2>Emp Role : ${empRole}</h2>`)
})

app.get('/allemp',(req,res)=>{
    // res.render('allemp.ejs');
    var sql = `select * from emp`;
    connection.query(sql, (err,result)=>{
        if(err) {
            console.log('data is not fetched');
            console.log(err);
        }
        else{
            console.log('data is fetched successfully');
            // data traversing 
            const obj = {data:result};
            res.render('allemp.ejs',obj)
        }
    })
})

app.get('/delete/:id', (req, res) => {
    const empId = req.params.id;  
    const sql = `DELETE FROM emp WHERE empId = ?`;
    connection.query(sql, [empId], (err, result) => {
        if (err) {
            console.log(err);
            console.log('Not deleted this record');
        } else {
            console.log('Deleted successfully');
            res.redirect('/allemp');
        }
    });
});

// edit operation
app.get('/edit', (req, res) => {

    var urldata = url.parse(req.url, true);
    console.log(urldata.query.id)

    const id = urldata.query.id;

    // res.send("Edited User "+urldata.query.id);

    var sql = `select * from emp where empId='${id}'`;
    connection.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
            console.log("Faild to insert user data..")
        }

        else
        {
            console.log(result[0])

            // data comes in a array object format = [{}]

            console.log("User Fetched Sucessfully...")

            const obj={data:result[0]}

            res.render('edit.ejs',obj)

        }
    })

})

app.post('/updateform', (req, res) => {
    const { empName, empEmail, empPass, empRole, empId } = req.body;

    const sql = `UPDATE emp SET empName = ?, empEmail = ?, empPass = ?, empRole = ? WHERE empId = ?`;
    const values = [empName, empEmail, empPass, empRole, empId];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.log(err);
            console.log('Data not updated');
            return res.status(500).send("Update failed.");
        }

        console.log('Data updated successfully');
        res.redirect('/allemp');
    });
});



app.listen(PORT,HOST,()=>{
    console.log(`Server is up.........`)
})