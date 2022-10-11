const fs = require('fs');

const readStrem = fs.createReadStream('data.txt');

readStrem.on('data', (chunk) => {
    console.log('...............')
    console.log(chunk)
})

readStrem.on('open', () => {
    console.log('stream is open')
})

setTimeout(() => {
    readStrem.pause()
    console.log('stream is pause ')
}, 15)

setTimeout(() => {
    readStrem.resume()
    console.log('stream is resume now ')
}, 8000)