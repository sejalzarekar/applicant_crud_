const express = require ('express');
const app = express();

// Middleware

app.use(express.static('public/'));
app.use(express.urlencoded({extended:true}));
const url = require('url');

const PORT = 3000;
const HOST = '127.0.0.1';

app.get('/', (req,res) =>{
    res.render('home.ejs')
})

app.get('/saveproduct', (req,res)=>{
    const urlData = url.parse(req.url, true);

    res.send(urlData);
})

app.post('/saveproduct', (req,res)=>{
    // res.send(req.body);
    const productData = req.body;
    res.render('saveProduct.ejs',{ productData })
})

app.listen(PORT,HOST, ()=>{
    console.log(`server is running on http://${HOST}:${PORT}`)
})

