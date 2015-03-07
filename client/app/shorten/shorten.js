angular.module('shortly.shorten', [])

.controller('ShortenController', ['$scope', '$location', '$http', 'Links',
  function ($scope, $location, $http, Links) {
    $scope.link = '';
    $scope.submitting = false;
    $scope.addLink = function(){
      $scope.submitting = true;
      Links.addLink($scope.link).success(function(){
        $scope.submitting = false;
        $scope.link = '';
      });
    };

}]);
