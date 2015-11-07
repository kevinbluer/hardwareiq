angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicAnalytics) {
  $ionicAnalytics.track('Purchase Item', {
      item_id: 'lpdsx',
      item_name: 'Leopard Socks'
    });
})

.controller('DashCtrl', function($scope) {
  
})

.controller('ProjectsCtrl', function($scope) {
  
})

.controller('TopicsCtrl', function($scope, Topics) {
  $scope.topics = Topics.all();
  $scope.remove = function(topic) {
    Topics.remove(topic);
  };
})

.controller('TopicDetailCtrl', function($scope, $stateParams, Topics) {
  $scope.topic = Topics.get($stateParams.topicId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});