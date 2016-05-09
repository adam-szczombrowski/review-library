(function(){
var library = angular.module('library', ['templates', 'ngRoute', 'booksServices']);

library.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {templateUrl: 'index.html'})
  .when('/books', {
    templateUrl: 'books/index.html',
    controller: 'BooksController'
  })
  .when('/movies', {
    templateUrl: 'movies/index.html',
    controller: 'MoviesController'
  })
  .when('music', {
    templateUrl: 'music/index.html',
    controller: 'MusicController'
  })
  .otherwise({redirectTo: '/'});
}]);

library.controller('BooksController', ['$scope', function($scope){
  $scope.va = 'varvar'
}]);
library.controller('MusicController', ['$scope', function($scope){

}]);
library.controller('MoviesController', ['$scope', function($scope){

}]);
})();
