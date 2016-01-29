/**
 * Created by mufen on 28.01.2016.
 */
var roshenApp = angular.module("roshenApp",["ngRoute","ngTouch","angular-carousel"]);


roshenApp.config(['$routeProvider',"$locationProvider", function($routeProvide,$locationProvider){
    $locationProvider.html5Mode({
        enabled:true,
        requireBase: false
    });
    $routeProvide
        .when('/',{
            templateUrl:'template/home.html',
            controller:"homeCtrl"
        })
        .when('/about',{
            templateUrl:'template/about.html',
            controller:"aboutCtrl"
        })
        .when('/products',{
            templateUrl:'template/products.html',
            controller:"productsCtrl"
        })
        .when('/contacts',{
            templateUrl:'template/contacts.html',
            controller:"contactsCtrl"
        })
        .otherwise({
            redirectTo:"/"
        })
}]);

roshenApp.controller("menuPanel", function($scope,$http){
    $http.get('data/mainNav.json')
        .success(function(data){
            $scope.mainMenu = data;
        });
    $http.get('data/category.json')
        .success(function(data){
            $scope.category = data;
        });
});
roshenApp.controller("homeCtrl", function($scope,$http){
    $http.get('data/mainNav.json')
        .success(function(data){
            $scope.mainMenu = data;
        });
    $http.get('data/video.json')
        .success(function(data){
            $scope.videos = data;
        });
});
roshenApp.controller("aboutCtrl", function($scope,$http){
});
roshenApp.controller("contactsCtrl", function($scope,$http){
});
roshenApp.controller("productsCtrl", function($scope,$http){
    var productsObj;
    $http.get('data/category.json')
        .success(function(data){
            $scope.category = data;
            
        });
    $http.get('data/product.json')
        .success(function(data){
            $scope.products = data;
        });

});