angular
  .module('app')
  .component('app', {
    templateUrl: 'app/youtubevideoplayer.html',
    controller: function videoController ($scope) {
      $scope.urlText = '';
      $scope.loadVideo = function () {
        videojs('vid1').ready(function() {
          var myPlayer = this;
          myPlayer.src({type: 'video/youtube', src: $scope.urlText});
        });
      };
    }
  });
