const express = require('express');
const request = require('request');
const rp      = require('request-promise');
const app     = express();

const SERVICE_1 = "http://localhost:8081";
const SERVICE_2 = "http://localhost:8082";
const SERVICE_3 = "http://localhost:8083";

app.get('/', (req, res) => {
    res.send('Aggregator');
});

app.get('/service1', (req, res) => {
    request(SERVICE_1, (err, response, body) => {
        if (err) {
            res.status(500);
            res.send("Service 1 error");
        }

        res.send(body);
    });
});

app.get('/aggregate', (req, res) => {
    Promise.all([
        rp(SERVICE_1), rp(SERVICE_2), rp(SERVICE_3)
    ]).then(responses => {
        res.send(responses.join('\n'));
    }).catch(err => {
        res.status(500);
        res.send("Service error");
    });
});

app.listen(8080, () => console.log('Aggregator started.'));
