var express = require('express')

const app= express()

app.get('/',(req,res)=> {
    res.send('<h1>helooo sejjj</h1>')
    res.send('<h2>helooo tejjj</h2>')
})

app.listen(3000,()=> {
    console.log("server is running")
})