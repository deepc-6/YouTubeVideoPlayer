angular
  .module('app')
  .component('app', {
    templateUrl: 'app/youtubevideoplayer.html',
    controller: function videoController ($scope) {

      $scope.dataSetup = '{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=OPxeCiy0RdY"}] }';

    }
  });
