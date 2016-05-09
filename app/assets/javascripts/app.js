(function(){
var library = angular.module('library', ['templates', 'ngRoute']);

library.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {templateUrl: 'index.html'})
  .when('/books', {
    templateUrl: 'books/index.html',
    controller: 'BooksController'})
}]);

library.controller('BooksController', ['$scope', function($scope){
  $scope.va = 'varvar'
}]);
})();
