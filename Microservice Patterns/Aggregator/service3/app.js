const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Service 3');
});

app.listen(8083, () => console.log('Service 3 started.'));
