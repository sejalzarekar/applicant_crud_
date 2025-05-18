const express = require ('express');

const app = express();

const url = require('url')

app.get('/', (req,res) =>{
    // res.send(`Hellooo Sejall!!`);

    const user = [
        {
            id:1,
            name:'Sejal',
            role:'developer'
        },
        {
            id:2,
            name:'Tejal',
            role:'MERN developer'
        },
        {
            id:3,
            name:'Steeeejal',
            role:'developer'
        }   
    ]

    const empRole = "<b>MERN Stack Developer</b>"
    const obj = {data:user, empRole}
    res.render('home.ejs',obj)
    
})

app.get('/about', (req,res) =>{
    res.render('about.ejs')
})

app.get('/contact',(req,res) =>{
    res.render('contact.ejs')
})

app.get('/saveform', (req,res) =>{

    const urldata = url.parse(req.url, true)

    console.log(urldata.query)

    res.send(`
        
        <h1>Congratulationsssssss Dearrr!!!</h1>


        <h2>
        Your Name is : <mark> ${urldata.query.username} </mark> <br><br>
         Your Email is : <mark> ${urldata.query.useremail} </mark> <br><br>
          Your Password is : <mark> ${urldata.query.password} </mark> <br><br>
        </h2>

        `)
})



const PORT = 3001;
const HOST = '127.0.0.1';
// const HOST = '0.0.0.0';


app.listen(PORT, HOST, ()=>{
    console.log(`Server is succesfully running on http://${HOST}:${PORT}`)
})

