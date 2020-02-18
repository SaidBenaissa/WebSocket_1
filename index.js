let express = require('express');
let socket = require('socket.io');
// App 
let app = express();

// Server
let server = app.listen(4000, () =>{
         console.log("Listening to port 4000");
});

// Static files
app.use(express.static('public'));

// Socket SetUp : take as input the server to connect with
let io = socket(server);
io.on('connection', (socket) => {
    console.log(' Sockets connection maded',socket.id)
});