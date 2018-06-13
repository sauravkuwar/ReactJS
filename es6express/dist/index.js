'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/static', _express2.default.static('public'));

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen('3001', 'localhost', function () {
    console.log("Running express server");
});