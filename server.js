const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => {
    console.log('hello world');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});