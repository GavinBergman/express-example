const express = require('express');
const app = express();

app.use( express.static('index.html'));

app.listen(8080, () => console.log('listening at 8080'));

