const express = require('express');

const app = express();

app.use(express.static("public/"))

app.use(express.urlencoded({extended:true}))

app.get("/", (req,res)=>{
    res.render('home.ejs')
})

app.get("/contact", (req,res) =>{
    res.render("contact.ejs")
})

app.post("/saveform", (req,res)=>{
    // res.send(req.body);
    const formData = req.body
    res.render("details.ejs", {data:formData})
})



const PORT = 3000;
const HOST = '127.0.0.1';

app.listen(PORT, HOST, ()=>{
    console.log(`Server is succesfully running on http://${HOST}:${PORT}`)
})

