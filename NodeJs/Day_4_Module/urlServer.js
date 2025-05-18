var http = require('http')

// url parsing
var url = require('url')

// Curstom module
var Calci=require('./Module');

// 1
Calci.Sum(100,200)
Calci.Sum(40,30)

// 2
console.log(Calci.Sub(300,200,40))

const App = http.createServer((req, res) => {

    // set Header
    res.writeHead(200, { 'Content-Type': 'text/html' })

    // var url_link="https://www.google.com/search?q=apple+iphone+15+pro&oq=apple+iphone+15+pro&gs_lcrp=EgZjaHJvbWUqFQgAEAAYFBiHAhjjAhixAxiABBifBDIVCAAQABgUGIcCGOMCGLEDGIAEGJ8EMg8IARAuGCcYgAQY5QQYigUyEggCEC4YFBiHAhixAxiABBjlBDINCAMQLhixAxiABBjlBDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIKCAcQLhiABBjlBDIHCAgQABiABDIHCAkQABiABNIBCDM3NTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"

    var urldata = url.parse(req.url, true)
    // console.log(urldata)
    // name
    console.log(urldata)


    var menu = `

        <a href='/'>Home Page</a>
        <br>
        <br>

        <a href='/about'> ABout Us Page </a>

         <br>
         <br>
        
         <a href='/contact'> Contact Us Page </a>

        
        `
    res.write(menu)


    // Handle url data
    if (req.url == '/') {
        res.write('<h1>Home Page</h1>')
    }

    if (req.url == '/about')
        res.write('<h1>About Us Page</h1>')

    if (req.url == '/contact') {
        res.write('<h1>Contact US Page</h1>')
    }





    res.end()
})


const PORT = 1000;
const HOST = '127.0.0.1'
App.listen(PORT, HOST, () => {
    console.log(`server is successfully running http://${HOST}:${PORT}`)
})