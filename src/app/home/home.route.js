(function () {
  "use strict";

  angular
    .module("app")
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "app/home/home.html",
        controller: "HomeHomeController",
        controllerAs: "vm"
      });
  }
})();
