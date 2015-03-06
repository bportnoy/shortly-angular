angular.module('shortly.shorten', [])

.controller('ShortenController', ['$scope', '$location', '$http', 'Links',
  function ($scope, $location, $http, Links) {
    $scope.link = {};
    $scope.addLink = function(url){
      $http.post('/api/links',
        {url: url})
      .success(function(data, status, headers, config){
      console.log('Link posted successfully with code ' + status);
    }).error(function(data, status, headers, config){
      console.log('ERRORRRR! (posting a link)');
    });
  };
}]);
