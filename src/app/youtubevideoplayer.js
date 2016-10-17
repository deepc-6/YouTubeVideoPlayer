angular
  .module('app')
  .component('app', {
    templateUrl: 'app/youtubevideoplayer.html',
    controller: function videoController ($scope) {
      $scope.urlText = '';
      $scope.loadVideo = function () {
        videojs('vid1').ready(function() {
          var myPlayer = this;
          myPlayer.hotkeys({
            enableJogStyle: true,
            seekStep: 0
          });
          myPlayer.src({type: 'video/youtube', src: $scope.urlText});
          myPlayer.poster('');
        });
      };
    }
  });
