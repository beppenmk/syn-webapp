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
          checkLogged: function ($firebaseAuthService) {
            // in caso di errore viene eseguito
            // $stateChangeError
            return $firebaseAuthService.$requireSignIn();
          }
        }
      })
    ;
  }
})();
