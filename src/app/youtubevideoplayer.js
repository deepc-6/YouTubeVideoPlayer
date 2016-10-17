angular
  .module('app')
  .component('app', {
    templateUrl: 'app/views/youtubevideoplayer.html',
    controller: function videoController ($scope) {

      /**
       * @property {string} urlText - The input for youtube url.
       */
      $scope.urlText = '';

      /**
       *  @function loadVideo - This function initializes the hotkeys and sets the source for the video from the input field.
       */
      $scope.loadVideo = function () {

        /**
         * @function ready - This function triggers any code that requires the player's API.
         */
        videojs('vid1').ready(function() {

          /**
           * Create an instance of the current player.
           */
          var myPlayer = this;

          /**
           * Configure hotkeys for the player.
           */
          myPlayer.hotkeys({
            enableJogStyle: true,
            seekStep: 0
          });

          /**
           * Set the source for the player.
           */
          myPlayer.src({type: 'video/youtube', src: $scope.urlText});

          /**
           * Set poster to null for the player to automatically load it when source is changed.
           */
          myPlayer.poster('');

        });

      };

    }

  });
