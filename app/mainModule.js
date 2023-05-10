var myRentingApp = angular.module('myRentingApp', ['ngRoute']);

var auxiliarCars = [];


myRentingApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl: 'app/views/home.html',
        })
        .when('/catalogue', {
            templateUrl: 'app/views/catalogue.html',
            controller: 'carsController'
        })
        .otherwise({
            redirectTo: '/home'
        })

}]);


myRentingApp.controller('carsController', ['$scope', '$http', function($scope, $http){


    $http.get('app/db/cars.json').then(function(response){
        $scope.cars = response.data;
    });
    

    $scope.addListing = function(){
        $scope.cars.push({
            make: $scope.listing.make,
            name: $scope.listing.name,
            model: $scope.listing.model,
            priceDay: $scope.listing.priceDay,
            image: $scope.listing.image
        })
    };
    

    $scope.removeCar = function(car){
        var removedCar = $scope.cars.indexOf(car)

        $scope.cars.splice(removedCar,1);

    };

}]);



