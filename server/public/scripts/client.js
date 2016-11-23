var myApp = angular.module("myApp", [])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/customer', {
      templateUrl: '/views/templates/customer.html',
      controller: 'CustomerController',
      controllerAs: 'customer'
    })
}]);

myApp.controller("CustomerController", ["$http", function($http){

  var self = this;

  self.first_names = [];
  self.last_names = [];

  getCustomers()

  function getCustomers() {
      $http.get('/warehouse')
        .then(function(response) {
          console.log(response.data);

          });
        };
}]);
