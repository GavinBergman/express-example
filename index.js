const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('In the morning im making waffles.');
});

app.listen(8080),() => {
console.log('listening to port 8080');
};
