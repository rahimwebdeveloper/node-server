const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url = "/") {
        // fs.readFile('data.txt', (error, data) => {
        //     if (error) {
        //         res.write("Failed To Read Data!!")
        //         res.end()
        //     } else {
        //         res.write(data)
        //         res.end()
        //     }
        // })

        // const data = fs.readFileSync('data.txt') ;
        // res.write(data);
        // res.end();

        
    }
})
const PORT = 5000;
server.listen(PORT);
console.log(`server is running ${PORT}`)
