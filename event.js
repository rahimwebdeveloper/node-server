const events = require("events") ;
const eventEmitter = new events.EventEmitter() ;


// creating an  event handler 
const amiTokeMarbo = () => {
    console.log("bei sala amar taka na dile toke kun korbo !!!")
}

// assign the handler 

eventEmitter.on('scream', amiTokeMarbo).amiTokeMarbo ;

// firing the event 

eventEmitter.emit('scream');