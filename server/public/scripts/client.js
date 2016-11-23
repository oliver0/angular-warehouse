var app = angular.module("myApp", ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/customer', {
    templateUrl: '/views/templates/customer.html',
    controller: 'CustomerController',
    controllerAs: 'customer'
  }).otherwise({
    redirectTo: 'customer'
  })
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
