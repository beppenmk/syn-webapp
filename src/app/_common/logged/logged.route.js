(function () {
  "use strict";

  angular
    .module("app")
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state("logged", {
        url: "/logged",
        templateUrl: "app/_common/logged/logged.html",
        resolve: {
          checkLogged: function ($log, $location, $q, $state, $localStorage, $timeout) {
            var deferred = $q.defer();
            // verifico lo stato logged, in caso negativo redirect allo   state 'home'
            $timeout(function () {
              if (true) {
                deferred.resolve();
              } else {
                $state.go('home');
                deferred.reject();
              }
            }, 0);
            return deferred.promise;
          }
        }
      });
  }
})();
