describe('component: app', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('app', function () {
      return {
        templateUrl: 'app/views/youtubevideoplayer.html'
      };
    });
  }));
  beforeEach(angular.mock.inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));
  it('loadVideo function should be called', function () {
    var $scope = {};
    var controller = $componentController('app', { $scope: $scope });
    spyOn($scope, 'loadVideo');
    $scope.loadVideo();
    expect($scope.loadVideo).toHaveBeenCalled();
  });
});
