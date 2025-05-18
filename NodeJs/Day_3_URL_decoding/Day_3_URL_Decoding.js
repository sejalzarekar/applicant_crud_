const http = require('http');

var url = require ('url');

// var urllink = 'https://www.google.com/search?q=apple+iphone+17&oq=apple+iphone+17+&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDQgBEAAYgwEYsQMYgAQyCggCEAAYsQMYgAQyCggDEAAYsQMYgAQyCggEEAAYsQMYgAQyCQgFEAAYAxiLAzINCAYQABiLAxixAxiABDIHCAcQABiABDIKCAgQABiLAxiABDIKCAkQABiLAxiABNIBCTE0MjY0ajFqN6gCCLACAfEFdV18G_5-en4&sourceid=chrome&ie=UTF-8'

// var urldata = url.parse(urllink,true);



const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Set response header
    res.write('<h1>Here is Url Decoding!</h1>');

    res.write('<h2>Routing Appp using URL Decoding!</h2>');


    var urldata= url.parse(req.url, true);
    console.log(urldata);

    // Routing

    if(urldata.pathname=== '/'){
        res.write("<h1>Home Page</h1>")
    }
    else if(urldata.pathname=== '/about'){
        res.write("<h1>About Us Page</h1>")
    }

    else if(urldata.pathname=== '/contact'){
        res.write("<h1>Contact Us Page</h1>")
    }

    else if(urldata.pathname=== '/service'){
        res.write("<h1>Services Page</h1>")
    }

    else{
        res.write("<h1>Page Not Found</h1>")
    }

    res.end(); // End the response
});

const PORT = 3000;
const HOST = '127.0.0.1';

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

// // https://www.google.com/


// search?q=apple+iphone+17&oq=apple+iphone+17+&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDQgBEAAYgwEYsQMYgAQyCggCEAAYsQMYgAQyCggDEAAYsQMYgAQyCggEEAAYsQMYgAQyCQgFEAAYAxiLAzINCAYQABiLAxixAxiABDIHCAcQABiABDIKCAgQABiLAxiABDIKCAkQABiLAxiABNIBCTE0MjY0ajFqN6gCCLACAfEFdV18G_5-en4&sourceid=chrome&ie=UTF-8