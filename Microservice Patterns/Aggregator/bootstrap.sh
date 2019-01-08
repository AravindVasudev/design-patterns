#!/bin/sh

node service1/app.js &
node service2/app.js &
node service3/app.js &
node aggregator/app.js &
wait
