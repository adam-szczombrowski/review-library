var booksDirectives = angular.module('booksDirectives', []);

booksDirectives.directive('bookForm', function(){
  return {
    restrict: 'E',
    templateUrl: 'books/book-form.html'
  };
});

booksDirectives.directive('bookList', function(){
  return {
    restrict: 'E',
    templateUrl: 'books/book-list.html'
  };
});

booksDirectives.directive('bookPreview', function(){
  return {
    restrict: 'E',
    templateUrl: 'books/book-preview.html'
  }
});
