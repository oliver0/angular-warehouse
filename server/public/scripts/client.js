var myApp = angular.module("myApp", [])

myApp.controller("BookController", ["$http", 'uniqueFilter', function($http, uniqueFilter) {


  function getBooks() {
      $http.get('/warehouse')
        .then(function(response) {
          console.log(response.data);

          });
        });
    }
}]);
