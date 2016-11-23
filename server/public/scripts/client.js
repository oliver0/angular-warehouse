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
