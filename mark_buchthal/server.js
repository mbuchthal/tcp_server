
const net = require('net');
const fs = require('fs');

const port = 3000;

const server = module.exports = net.createServer((socket) => {
  var fileName = Date.now();
  var myFile = fs.createWriteStream(__dirname + '/files/' + fileName);
  socket.on('data', (chunk) => {
    console.dir('yay...data received');
    myFile.write(chunk);
  });
});

server.listen(port, () => {
  process.stdout.write('Server up on port: ' + port +'\n');
});
