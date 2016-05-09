var booksServices = angular.module('booksServices', ['ngResource']);

booksServices.factory('Book', ['$resource', function($resource){
  return $resource('books.json', {}, {
        query: {method:'GET', isArray:true}
      });
}]);
