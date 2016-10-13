(function() {
  'use strict';
  var app = angular.module('app', ['ngMessages']);

  app.controller("formPoster", function($scope,$rootScope){

  $scope.postResults = function() {
    $scope.formSubmitted = false;
    return $scope.formSubmitted = true;
  };
})

}());
