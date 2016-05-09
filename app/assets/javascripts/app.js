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

library.controller('BooksController', ['$scope', 'Book', function($scope, Book){
  $scope.books = Book.query();
  $scope.newBook = {};
  $scope.orderProp = '-updated_at';
  $scope.save = function(){
    console.log($scope.newBook);
    Book.save($scope.newBook, function(){
      $scope.books = Book.query();
      $scope.newBook = {};
    });
  };
}]);
library.controller('MusicController', ['$scope', function($scope){

}]);
library.controller('MoviesController', ['$scope', function($scope){

}]);
})();
