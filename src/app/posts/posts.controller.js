(function () {
  "use strict";
  angular
    .module("app")
    .controller("PostsController", PostsController);

  function PostsController($log, posts) {
    var vm = this;
    vm.posts = posts;
    $log.debug('PostsController');
  }
})();
