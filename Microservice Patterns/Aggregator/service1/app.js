const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Service 1');
});

app.listen(8081, () => console.log('Service 1 started.'));
