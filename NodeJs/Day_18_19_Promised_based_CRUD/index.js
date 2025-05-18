var express = require('express')
const app = express()

const PORT = 3000 || process.env.PORT;
const HOST = '127.0.0.1';

// middleware
app.use(express.static('public/'))

// req.body 
app.use(express.urlencoded({ extended: true }));

//url
var url = require('url');


// db connection
var connection = require('./config/db')

app.get('/', (req, res) => {
    // res.send("hello welcome to express server");

    res.render('home.ejs');
})

app.post('/submit', async (req,res)=>{
   try{
    // res.send('submittttt');
        // console.log(req.body);
         const {pname,pcategory,pprice,pquantity,pdetails} = req.body;

        var sql =` insert into products (pname,pcategory,pprice,pquantity,pdetails) values ('${pname}', '${pcategory}',
        '${pprice}','${pquantity}', '${pdetails}') `;

        const result = await connection.execute(sql);
        console.log(result);
        console.log('data inserted successfully');
        // res.send('data is inserted successfully');
        res.redirect('/productsdata');
    }catch(err){
        console.log(err);
        console.log('data is not inserted');
        return;
    }
})

app.get('/productsdata',async(req,res)=>{
try{
    var sql = `select * from products`;
    const [result]= await connection.execute(sql);
    console.log(result);

    const obj = {data:result}
    res.render('productsdata.ejs',obj);
    console.log('data fetched successfully');
}catch(err){
    console.log(err);
    console.log('data is not fetched successfullyy');
    return;
}
})

//delete operation

app.get('/delete/:id',async (req,res)=>{
    try{
        var id = req.params.id;
        var sql = `delete from products where pid= '${id}'`;
        await connection.execute(sql);
        res.redirect('/productsdata')
    }catch(err){
        console.log(err);
        console.log('not deleted products')
    }
})

//edit operation 
app.get('/edit/:id',async (req,res)=>{
    try{
        var id= req.params.id;
        var sql = `select * from products where pid ='${id}'`
        const [result]= await connection.execute(sql)
        console.log(result[0]);
        const obj = {data : result[0]};
        res.render('editproduct.ejs',obj)
    }catch(err){
        console.log(err);
        console.log('data is not fetched');
    }
})

app.post('/editproduct', async(req,res)=>{
    try{

        const {pname,pcategory,pprice,pquantity,pdetails,pid} = req.body;
        console.log(req.body);

        var sql= `update products set pname='${pname}',pcategory='${pcategory}',
        pprice='${pprice}', pquantity='${pquantity}', pdetails='${pdetails}'where pid='${pid}' `;

        await connection.execute(sql);
        res.redirect('/productsdata');

    }catch(err){
        console.log(err);
        console.log('data is not updated ')
    }
})

app.listen(PORT, HOST, () => {
    console.log("Server is up...")
})

