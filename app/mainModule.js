var myRentingApp = angular.module('myRentingApp', ['ngRoute']);


// myRentingApp.config(['$routeProvider', function($routeProvider){

//     $routeProvider
//         .when('catalogue', {
//             templateUrl: 'app\views\catalogue.html',
//             controller: 'carsController'
//         })

// }]);


myRentingApp.controller('carsController', ['$scope', '$http', function($scope, $http){

    $http.get('app/db/cars.json').then(function(response){
        $scope.cars = response.data;
    });
    
}]);


