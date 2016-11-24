(function () {
  "use strict";

  angular
    .module("app")
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state) {
    $rootScope.appName = "App";
    $rootScope.state = $state;


    $rootScope
      .$on('$stateChangeStart',
        function () {
        });

    $rootScope.$on("$stateChangeSuccess",
      function (event, toState) {
        $rootScope.stateName = toState.name;
      });
  }
})();
