var library = angular.module('library', ['templates', 'ngRoute', 'controllers']);

library.config(['$routeProvider', functino($routeProvider){
  $routeProvider.when('/', templateUrl: 'index.html')
}]);

var controllers = angluar.module('controllers', []);
controllers.controller('BooksController', ['$scope', function($scope){

}]);
