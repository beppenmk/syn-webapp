(function () {
  "use strict";

  angular
    .module("app")
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    // routing di default
    $urlRouterProvider.otherwise("/home");
  }
})();
