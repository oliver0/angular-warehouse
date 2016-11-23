var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/sigma';

router.get('/', function(req, res) {
  console.log('message on REQ: ', req.message);
  // get books from DB
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query('SELECT order_date, description, street, city, state, zip, address_type, first_name, last_name FROM orders JOIN line_items ON line_items.order_id = orders.id JOIN products ON products.id = line_items.product_id JOIN addresses ON orders.address_id = orders.id JOIN customers ON customers.id = addresses.customer_id',
    function(err, result) {
      done(); // close the connection.

      // console.log('the client!:', client);

      if(err) {
        console.log('select query error: ', err);
        res.sendStatus(500);
      }
      res.send(result.rows);

    });

  });
});

module.exports = router;
