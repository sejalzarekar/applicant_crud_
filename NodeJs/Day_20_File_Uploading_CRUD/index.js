const express = require('express');
const app = express();

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

//multer configuration

var multer = require('multer');

// file upload configuration 

const storage= multer.diskStorage({
    destination:'public/uploads/',
    filename:(req , File, cb) =>{
        cb(null, Date.now() + File.originalname);
    }
})

const upload = multer({storage : storage})


app.get('/',(req,res)=>{
    // res.send('helloooo');
    res.render('home.ejs');
})

app.post('/saveform',upload.single('file') ,async (req,res)=>{
    // res.send('submittt');
    // res.send(req.body);
    // res.send(req.file);
    try{
        var filename = req.file.filename;

        var sql = `insert into profile(fullname, file) values('${req.body.fullname}', '${filename}')`

        await connection.execute(sql);
        res.send(`
            <script>alert('Profile created successfully');
            window.location.href='/userprofiles'
            </script>
            `)
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error")
        return;
    }

})

//userprofile

app.get('/userprofiles',async (req,res)=>{
    
        var sql = `select * from profile`;
        const result = await connection.execute(sql);
        console.log(result[0]);
        const obj = {data: result[0]}

        res.render('userprofiles.ejs',obj);

    
})

//delete operation
app.get('/delete/:id',async (req,res)=>{
    var id = req.params.id;

    var sql = `delete from profile where profile_id = '${id}'`;
    await connection.execute(sql);
    res.redirect('/userprofiles');

})

//edit operation
app.get('/edit/:id',async(req,res)=>{
    var id= req.params.id;

    var sql = `select * from profile where profile_id=${id}`;

    const result = await connection.execute(sql);
    console.log(result[0]);
    const obj = {data: result[0][0]}
    res.render('editprofile.ejs',obj)

})

app.post('/updateprofile',upload.single('file'), async(req,res)=>{
    // res.send(req.file);
    if(req.file){
        var sql= `update profile set file='${req.file.filename}' where profile_id=${id}`
    await connection.execute(sql)
    }

    var sql2= `update profile set fullname='${req.body.fullname}, file='${req.file.filename}' where profile_id='${id}'`;
    await connection.execute(sql2)
    res.redirect('/userprofile');

})

app.listen(PORT, HOST, () => {
    console.log("Server is up...")
})