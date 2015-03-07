angular.module('shortly.shorten', [])

.controller('ShortenController', ['$scope', '$location', '$http', 'Links',
  function ($scope, $location, $http, Links) {
    $scope.urlBox = '';
    $scope.link = {url: $scope.urlBox};
    $scope.addLink = function(){
      $http.post('/api/links', {url: $scope.urlBox})
      .success(function(data, status, headers, config){
        console.log('Link posted successfully with code ' + status);
        $scope.urlBox = '';
      }).error(function(data, status, headers, config){
        console.log('ERRORRRR! (posting a link)');
      });
    };
}]);
