angular.module('shortly.links', [])

.controller('LinksController', ['$scope', '$http', 'Links',
  function ($scope, $http, Links) {
  $scope.data = {};
  Links.getLinks().then(function(data){
    $scope.data.links = data;
  });
}]);
