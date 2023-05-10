var myRentingApp = angular.module('myRentingApp', ['ngRoute']);


myRentingApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl: 'app/views/home.html',
        })
        .when('/catalogue', {
            templateUrl: 'app/views/catalogue.html',
            controller: 'carsController'
        })
        .when('/newListing', {
            templateUrl: 'app/views/newListing.html',
        })
        .otherwise({
            redirectTo: '/home'
        })

}]);


myRentingApp.controller('carsController', ['$scope', '$http', function($scope, $http){

    $http.get('app/db/cars.json').then(function(response){
        $scope.cars = response.data;
    });
    
}]);



