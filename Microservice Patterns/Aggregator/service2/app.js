const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Service 2');
});

app.listen(8082, () => console.log('Service 2 started.'));
