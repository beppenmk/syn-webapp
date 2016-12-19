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
        templateUrl: "app/auth/login/login.html",
        controller: "PublicLoginController",
        controllerAs: "vm",
        params: {
          errorMessage:''
        }
      })
      .state("logged", {
        url: "",
        template: "<ui-view ></ui-view>",
        resolve: {
          checkLogged: function ($log,$timeout, $state, LoginService) {
            $timeout(function () {
              if (!LoginService.isLogged()) {
                $log.debug('non loggato');
                $state.go('login',{errorMessage:'Per accedere devi prima effettuare il login'});
                return false;
              } else {
                $log.debug('Loggato');
                return true;
              }
            }, 0)

          }
        }
      })
    ;
  }
})();
