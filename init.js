var path = require('path');
var express = require('express');
var app = express();

// const webpack = require('webpack');
// const webpackConfig = require("./webpack.config.js");
// let compiler = webpack(webpackConfig);
var routes = require('./server/routes')

app.use(express.static(path.join(__dirname,'front')));


app.use('/',routes)

// app.get('/', function (req, res) {
// 	res.send('/init.html');
// });

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});