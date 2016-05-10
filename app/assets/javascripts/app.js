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
  $scope.init = function(){
    $scope.buttonName = 'Create review';
    $scope.showForm = false;
    $scope.books = Book.query();
    $scope.newBook = {};
    $scope.query = '';
  };

  $scope.init();

  $scope.toggleForm = function(){
    $scope.showForm = !$scope.showForm;
    $scope.buttonName = $scope.showForm ? 'Hide form' : 'Create review';
  };

  $scope.save = function(isValid){
    console.log($scope.newBook);
    if(isValid){
      Book.save($scope.newBook, function(){
        $scope.init();
      });
    }
  };
}]);
library.controller('MusicController', ['$scope', function($scope){

}]);
library.controller('MoviesController', ['$scope', function($scope){

}]);
})();
