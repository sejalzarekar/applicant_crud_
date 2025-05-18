const http = require('http');

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Set response header
    res.write('<input type="text">');
    res.write('<h1>Hiee Sejallll...Goood Eveninggg..!</h1>');

    // Correct way to generate multiple divs
    for (let i = 0; i < 100; i++) {
        res.write(`<div style="height:${i}px; width:${i}px; background-color:orange;float:left; margin-left:5px;margin-top:5px"></div>`);
    }

    res.end(); // End the response
});

const PORT = 3000;
const HOST = '127.0.0.1';

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
