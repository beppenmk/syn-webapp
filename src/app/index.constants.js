(function () {
  "use strict";
  angular
    .module("app")
    .constant("_", _) // rendo inniettavile _
    .factory("ENV", function ($log, $window) {
      var env;
      $log.debug( $window.location.hostname);
      if (
        $window.location.hostname === '192.168.111.117'
        || $window.location.hostname === '192.168.111.75'
        || $window.location.hostname === '127.0.0.1'
        || $window.location.hostname === '127.0.0.1.xip.io'
        || $window.location.hostname === 'localhost'
      //  || $window.location.hostname === 'confart.syn.rocks'
      ) {
        env = 'DEV';
        angular.element('body').append('<div style="background-color: #00cc76; position: fixed;top:0; width: 100%; line-height: 1em;">ENV</div>')
      } else {
        env = 'PROD';
      };
      return env;
    })
  ;
})();
