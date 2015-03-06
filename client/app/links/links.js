angular.module('shortly.links', [])

.controller('LinksController', ['$scope', '$http',
  function ($scope, $http) {
  $scope.data = {};
  $scope.getLinks = function(){
    $http.get('/api/links')
      .success(function(data,status,headers,config){
        $scope.data.links = data;
      });
  };

  $scope.getLinks();
}]);
