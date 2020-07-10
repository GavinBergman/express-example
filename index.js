const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname + 'index.html'));
  // you can also say res.sendFile(path.join(__dirname + '/folder-name/index.html')); if you want to put the html in a folder
  console.log('new user has connected to the server');
});

app.listen(port, console.log('listening at 8080'));

