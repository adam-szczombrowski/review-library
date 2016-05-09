var booksServices = angular.module('booksServices', ['ngResource']);

booksServices.factory('Book', ['$resource', function($resource){
  return $resource('/books/:id.json');
}]);
