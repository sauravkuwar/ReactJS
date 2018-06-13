import express from 'express';

const app = express();

app.use('/static', express.static('public'))

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen('3001', 'localhost', () => {
    console.log("Running express server");
});