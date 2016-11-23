var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: '/views/templates/home.html',
    controller: 'HomeController'
  })
  .when('/warehouse', {
    templateUrl: '/views/templates/warehouse.html',
    controller: 'WarehouseController'
  })
  .otherwise({
    redirectTo: 'home'
  });
}]);

app.controller('WarehouseController', function() {
  console.log('warehouse controller running');
}); //end app.controller
