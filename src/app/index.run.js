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

    $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, error) {
        $log.debug('$stateChangeError');
        $state.go('login', {errorMessage: 'Per accedere devi prima effettuare il login', successMessage: ''});
      });
  }
})();
