var http = require('http');
var url = require('url');
const App = http.createServer((req,res,) =>{
    res.writeHead(200, {'content-type':'text/html'});
    // res.write("Hello welcome to Node Js Server");

    // routing handling using url in node js 

var urldata = url.parse(req.url,true)

    var menu = `
    <a href='/'>Home Page</a>
    <a href='/about'>about Page</a>
    <a href='/contact'>contact Page</a>
    `
    res.write(menu);
    res.end()
})


const PORT=3000;
const server = '127.0.0.1';
App.listen(PORT,server,() =>{
    console.log(`server is successfully run on http://${server}:${PORT}`);
})