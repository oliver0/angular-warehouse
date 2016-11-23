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
  .otherwise({
    redirectTo: 'home'
  });
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
