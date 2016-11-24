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
        templateUrl: "app/public/login/login.html",
        controller: "PublicLoginController",
        controllerAs: "vm"
      });
  }
})();
