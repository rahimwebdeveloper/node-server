// local modules  
const other = require("./other");

// const res = other.substract(5, 2)
// console.log(res)

const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': "application/json" });
        res.end(JSON.stringify({course: "ACC"}))
        // res.end()
    }
    else if (req.url == "/profile") {
        res.writeHead(200, { 'Content-type': "text/html" });
        res.write("<h1> This is a profile page </h1>")
        res.end()
    }
    else if (req.url == "/contact") {
        res.writeHead(200, { 'Content-type': "text/html" });
        res.write("<h1> This is a contact page </h1>")
        res.end()
    }
    else if (req.url == "/about") {
        res.writeHead(200, { 'Content-type': "text/html" });
        res.write("<h1> This is a about  page </h1>")
        res.end()
    }
})

const PORT = 5000;
server.listen(PORT);
console.log(`server is running ${PORT}`);

