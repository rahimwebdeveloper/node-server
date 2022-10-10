const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
    const rahim_url = "http://localhost:5000/contact?name=rahim&country=bangladesh"

    const parsed_url = url.parse(rahim_url, true);
    console.log(parsed_url);
    const result = parsed_url.query;
    const { name, country } = result;
    console.log(name, country)

})
// console.log(url)
const PORT = 5000;
server.listen(PORT);
console.log(`Server is running ${PORT}`)