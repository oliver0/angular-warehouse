var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var customer = require('./routes/customer.js');
var orders = require('./routes/orders');
var warehouse = require('./routes/warehouse');
var products = require)'./routes/products');

// Our routes
app.use('/warehouse', warehouse);
app.use('/orders', orders);
app.use('/products', products);
app.use('/customer', customer);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// serve static files
app.use(express.static(path.resolve('./server/public')));



// server index file
app.get('/home', function(req, res) {
    res.send("hello from the server");
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.listen(3000, function() {
  console.log("server running, check localhost:3000");
});
