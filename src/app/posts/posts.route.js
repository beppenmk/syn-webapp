(function () {
  "use strict";
  /**
   * usando logged
   * come parent bposso creare aree riservate
   */
  angular
    .module("app")
    .config(poststConfig);
  /** @ngInject */
  function poststConfig($stateProvider) {
    $stateProvider
      .state("logged.posts", {
        url: "/posts",
        abstract: true,
        template: "<div ui-view ></div>"
      })
      .state("logged.posts.list", {
        url: "/list",
        params: {},
        templateUrl: "app/posts/posts.list.html",
        controller: "PostsController",
        controllerAs: "vm",
        resolve: {
          posts: function ($log, PostsService) {
            $log.debug('resolve');
            return PostsService.getAll();
          }
        }

      })

    ;
  }
})();
