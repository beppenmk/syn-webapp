(function () {
  "use strict";

  angular
    .module("app")
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state("login", {
        url: "/public/login",
        templateUrl: "app/_common/public/login/login.html",
        controller: "PublicLoginController",
        controllerAs: "vm"
      })
      .state("logged", {
      url: "/logged",
      template: "<ui-view ></ui-view>",
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
    ;
  }
})();
