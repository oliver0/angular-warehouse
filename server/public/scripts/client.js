var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: '/views/templates/home.html',
    controller: 'HomeController'
  })
  .when('/warehouse', {
    templateUrl: '/views/templates/warehouse.html',
    controller: 'WarehouseController',
    controllerAs: 'warehouse'
  })
  .when('/customer', {
    templateUrl: '/views/templates/customer.html',
    controller: 'CustomerController',
    controllerAs: 'customer'
  })
  .when('/orders', {
    templateUrl: '/views/templates/orders.html',
    controller: 'OrderController',
    controllerAs: 'orders'
  })
  .when('/products', {
    templateUrl: '/views/templates/products.html',
    controller: 'ProductController',
    controllerAs: 'products'
  })
  .otherwise({
    redirectTo: 'home'
  });
}]);

app.controller("CustomerController", ["$http", function($http){

  var self = this;

  self.customers = [];
  getCustomers();
  console.log("Array of customers", self.customers);



  function getCustomers() {
    $http.get('/customer')
    .then(function(response) {
      // console.log(response.data);
      self.customers = response.data;
      // console.log("Client side", self.customers);
    });
  };
}]);

  app.controller('WarehouseController', ["$http", function($http) {
  console.log('warehouse controller is running');
  var self = this;
  self.warehouses = [];

  getWarehouses();

  function getWarehouses() {
    //$.ajax
    $http.get('/warehouse')
      .then(function(response) {
        self.warehouses = response.data;
      });
  } // end getWarehouses function
}]); //end app.controller

app.controller('OrderController', ["$http", function($http) {
  console.log('order controller running');
  var self = this;
  self.orders = [];
  getOrders();

  function getOrders() {
      $http.get('/orders')
        .then(function(response) {
          console.log(response.data);
          self.orders = response.data;
          // for (var i = 0; i < self.orders.length; i++) {
          //   self.orders[i].published = new Date(self.orders[i].published);
          //   console.log(self.orders[i].published);
          // }
        });
  }
}]); //end order controller


app.controller('ProductController', ["$http", function($http) {
console.log('product controller is running');
var self = this;
self.products = [];

getProducts();

function getProducts() {
  //$.ajax
  $http.get('/products')
    .then(function(response) {
      console.log(response.data);
      self.products = response.data;
    });
} // end getWarehouses function
}]); //end app.controller
