const express = require ('express');
const app= express();

const PORT = 3000;
const HOST = '127.0.0.1';

// Middleware 

app.use(express.json())

app.use(express.static('public/'))

const url = require('url');

app.use(express.urlencoded({extended:true}))

app.get('/', (req,res) =>{
    // res.send('hello');
    res.render('jobApplyForm.ejs')

})

app.get('/success', (req,res)=>{
    const urldata = url.parse(req.url,true);
    res.send(urldata);
})

app.post('/success', (req,res)=>{
    // res.send(req.body);
    const applicantdata = req.body;
    res.render('success.ejs', { applicantdata })
})


app.listen(PORT, HOST, ()=>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})