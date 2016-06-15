(function(){
var library = angular.module('library', ['templates', 'ngRoute', 'booksServices',
'booksDirectives', 'ui.bootstrap']);

library.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {templateUrl: 'index.html'})
  .when('/books', {
    templateUrl: 'books/index.html',
    controller: 'BooksController'
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
    $scope.currentPage = 1;
    $scope.totalItems = $scope.books.length;
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
