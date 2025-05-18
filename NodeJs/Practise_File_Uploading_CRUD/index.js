const express= require('express');
const app= express();

const HOST= '127.0.0.1';
const PORT=3000;

// middleware 

// statis file access
app.use(express.static('public/'))

//req.body data access
app.use(express.urlencoded({extended:true}));

// url data access 
var url= require('url');

// db connection 
var connection = require('./config/db')

// multer declaration 
var multer = require('multer');

// configuration setup 

const storage = multer.diskStorage({
    destination:'public/uploads/',
    filename:(req, file , cb ) =>{
        cb(null, Date.now() + file.originalname);
    }
})

// session configuration 

var session = require('express-session');
app.use(session({
  resave:true,
  saveUninitialized:true,
  secret:'Sejal'
}))

var upload = multer({storage : storage});

app.get('/',async(req,res)=>{
    // res.send('home page')
    try{

      var sql = `select * from slider`;
      const result = await connection.execute(sql);
      const obj= {data: result[0]}
    res.render('home.ejs',obj);
    }catch(err){
      console.log(err);
      console.log('carsousel not added...');
    }
})

// CREATE TABLE newProfiles (
//   profile_id INT PRIMARY KEY AUTO_INCREMENT,
//   fullname VARCHAR(100) NOT NULL,
//   role VARCHAR(50),
//   username VARCHAR(200) UNIQUE,
//   location VARCHAR(50),
//   email VARCHAR(50) UNIQUE,
//   phone VARCHAR(15),
//   join_date DATE,
//   file VARCHAR(255),
//   bio TEXT
// );
app.get('/add-profile',(req,res)=>{
    // res.send('home page')
    res.render('add_profile.ejs');
})
app.post('/saveform',upload.single('file') ,async(req,res)=>{
    try{
    // res.send(req.body);
    // res.send(req.file);
    const {fullname, role , username , location, email, phone , join_date , bio} = req.body;

    var filename = req.file.filename;

    var sql = `insert into newprofiles(fullname, role , username , location, email, phone , join_date, file , bio) values
    ('${fullname}', '${role}', '${username}', '${location}','${email}','${phone}','${join_date}', '${filename}', '${bio}' )
    `
    // res.send(sql);

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
    
        var sql = `select * from newprofiles`;
        const result = await connection.execute(sql);
        // console.log(result[0]);
        const obj = {data: result[0]}
        res.render('userprofiles.ejs',obj);
    
})

//delete operation 

app.get('/delete/:id',async(req,res)=>{

    try{
    var id= req.params.id;
    var sql = `delete from newprofiles where profile_id= ${id}`;

    await connection.execute(sql);
    res.redirect('/userprofiles')

    }catch(err){
        console.log(err);
        console.log('not deleted')
    }
    
})

// edit operation 
// app.get('/edit/:id',async (req,res)=>{
//     var id = req.params.id;

//     var sql = `select * from newprofiles where profile_id='${id}'`;
//     const result = await connection.execute(sql);
//     console.log(result[0]);

//     const obj = {data : result[0][0]};
//     res.render('editprofile.ejs', obj);
// })


// app.post('/updateprofile' ,upload.single('file'),async(req,res)=>{
//     try{

//     // var file = req.file.filename;
//     const {fullname, role , username , location, email, phone , join_date , bio, profile_id} = req.body;

   
//     if(req.file){
//         var sql= `update newprofiles set file = '${req.file.filename}' where profile_id= '${profile_id}'`;
//         await connection.execute(sql);
//     }


//     var sql2 = `update newprofiles set fullname='${fullname}',role='${role}',username='${username}' ,location='${location}',email='${email}',phone='${phone}',
//     join_date='${join_date}', file='${req.file.filename}', bio='${bio}' where profile_id='${profile_id}'`;

//     // res.send(sql);
//     await connection.execute(sql2);
//     res.redirect('/userprofiles')
//     }
    
//     catch(err){
//         console.log(err);
//         console.log('data is not updated')
//     }
// })

// GET: Edit Profile
app.get('/edit/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await connection.execute('SELECT * FROM newprofiles WHERE profile_id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).send('Profile not found');
    }
    res.render('editprofile.ejs', { data: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// POST: Update Profile
app.post('/updateprofile', upload.single('file'), async (req, res) => {
  try {
    const { fullname, role, username, location, email, phone, join_date, bio, profile_id } = req.body;
    let file = req.file ? req.file.filename : null;

    // If only file was uploaded, update just the file
    if (file) {
      await connection.execute(
        'UPDATE newprofiles SET file = ? WHERE profile_id = ?',
        [file, profile_id]
      );
    }

    // Update the rest of the fields (with or without file update)
    const query = `
      UPDATE newprofiles 
      SET fullname = ?, role = ?, username = ?, location = ?, email = ?, phone = ?, join_date = ?, bio = ?
      ${file ? ', file = ?' : ''}
      WHERE profile_id = ?`;
    
    const values = file 
      ? [fullname, role, username, location, email, phone, join_date, bio, file, profile_id]
      : [fullname, role, username, location, email, phone, join_date, bio, profile_id];

    await connection.execute(query, values);

    res.redirect('/userprofiles');
  } catch (err) {
    console.error(err);
    res.status(500).send('Data not updated due to server error.');
  }
});


// ****************************For carousel / slider ****************************************

app.get('/slider-adding',(req,res)=>{
  res.render('add-slider.ejs');
})

app.post('/add-slider',upload.single('file'),async (req,res)=>{
  try{

 
  // res.send(req.body);
    // res.send(req.file);

    const {slider_title, slider_desc} = req.body;
     var file = req.file ? req.file.filename :null;

     var sql = `insert into slider (slider_title, slider_desc, file) values ('${slider_title}','${slider_desc}','${file}')`;
     
     await connection.execute(sql);
     res.redirect('/manage-slider');
      }  catch(err){
        console.log(err);
        console.log('data is not inserted');
      }


})

app.get('/manage-slider',upload.single('file'), async(req,res)=>{

  var sql= `select * from slider`;
  const result= await connection.execute(sql);
  // console.log(result[0][0]);
  const obj = {data : result[0]}
  res.render('manage-slider.ejs',obj)
})

// delete operation 
app.get('/delete-slider/:id', async (req,res)=>{
try{
var id = req.params.id;
  var sql = `delete from slider where slider_id = '${id}'`

  await connection.execute(sql);
  res.redirect('/manage-slider')
}catch(err){
  console.log(err);
  console.log('not deleted')
}
})

app.get('/signupuser', (req,res)=>{
  res.render('signup.ejs')
})

app.post('/signup-form',async (req,res)=>{
  // res.send('signup success')
  try{
     const {useremail, userpass, usermobile}= req.body;

     var sql= `insert into instagram_user(useremail, userpass, usermobile) values ('${useremail}','${userpass}','${usermobile}')`
    //  res.send(sql);
    await connection.execute(sql);
    res.redirect('/loginuser');
  }catch(err){
    console.log(err)
  }
})

app.get('/loginuser',(req,res)=>{
  res.render('login.ejs')
})




app.post('/login-form', async (req, res) => {
    // res.send("<h1>Login Successfully..</h1>")

    const { useremail, userpass } = req.body;

    var sql = `select * from instagram_user where useremail='${useremail}' And userpass='${userpass}'`;
    const result = await connection.execute(sql)

    if (result[0].length > 0) {
        // res.send(`<h1>Login Successfully...</h1>`)

        // After login process we get to knoe user
        //  is valid so after that stored insta id to the session for future used - /profie /messages /notification

        req.session.insta_id = result[0][0].insta_id;

        // res.send(result[0][0])
        // res.send("<h1>Login Successfully</h1>"+req.session.insta_id)
        res.redirect('/profile')

    }


    else {
        // res.send("<h1>Login faild - Invalid Credentials....</h1>")

        res.send(`
            
            <script>

            alert('Invalid Credentials - Login faild');
            // window.location.href='/login'
            window.location.assign('/loginuser');

            </script>
            `)
    }


    // res.send(result[0])
})
// ****************************************************** after login 
app.get('/profile', (req,res)=>{
   if (req.session.insta_id) {
        res.send("<h1>Profile Page Open</h1>" + req.session.insta_id)
    }
    else {
        // res.redirect('/login')

        res.send(`
            <script>alert('Login To Open Profile')            
            window.location.href='/loginuser'
            </script>
            `)
    }
})

app.listen(PORT,HOST,()=>{
    console.log('server is up!!');
})