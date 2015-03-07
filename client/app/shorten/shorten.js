angular.module('shortly.shorten', [])

.controller('ShortenController', ['$scope', '$location', '$http', 'Links',
  function ($scope, $location, $http, Links) {
    $scope.link = '';
    $scope.addLink = function(){
      Links.addLink($scope.link);
      $scope.link = '';
    }

}]);
