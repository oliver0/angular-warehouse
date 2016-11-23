var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/orders', {
      templateUrl: '/views/templates/orders.html',
      controller: 'OrderController',
      controllerAs: 'orders'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);

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
}]);
